import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { prisma } from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { auth } from "@clerk/nextjs/server";
import { Class, Event, Prisma } from "@prisma/client";
import Image from "next/image";

type EventType = Event & {class: Class};

const EventListPage = async ({searchParams}: {
  searchParams: {[key:string]: string | undefined}
}) => {
  const {sessionClaims, userId} = await auth();
  const role = (sessionClaims?.metadata as {role?:string})?.role;

  const columns = [
    { header: "Title", accessor: "title" },
    {
      header: "Class",
      accessor: "class",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    {
      header: "Start Time",
      accessor: "startTime",
      className: "hidden md:table-cell",
    },
    {
      header: "End Time",
      accessor: "endTime",
      className: "hidden md:table-cell",
    },
    ...(role === "admin" ? [{ header: "Actions", accessor: "action", className: "table-cell" },] : [])
  ];
  
  const renderRow = (item: EventType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-waliPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class?.name || "-"}</td>
      <td className="hidden md:table-cell">{new Intl.DateTimeFormat("en-Us").format(item.startTime)}</td>
      <td className="hidden md:table-cell">{item.startTime.toLocaleString("en-Us", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      })}</td>
      <td className="hidden md:table-cell">{item.endTime.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      })}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  const {page, ...queryParams} = searchParams;
  const p = page ? parseInt(page) : 1;

  const query: Prisma.EventWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.title = {
              contains: value,
              mode: "insensitive"
            }
            break;
          default: 
            break;
        }
      }
    }
  }

  // Role Conditions
  switch (role) {
    case "admin":
      break;
    case "teacher":
      query.OR = [
        {
          classId: null
        },
        {
          class: {
            lessons: {
              some: {
                teacherId: userId!
              }
            }
          }
        }
      ]
      break;
    case "student":
      query.OR = [
        {
          classId: null
        },
        {
          class: {
            students: {
              some: {
                id: userId!
              }
            }
          }
        }
      ]
      break;
    case "parent":
      query.OR = [
        {
          classId: null
        },
        {
          class: {
            students: {
              some: {
                parentId: userId!
              }
            }
          }
        }
      ]
      break;
    default: 
      break;
  }

  const [data, count] = await prisma.$transaction([
    prisma.event.findMany({
      where: query,
      include: {
        class: {
          select: {
            name: true
          }
        }
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1)
    }),
    prisma.event.count({
      where: query
    })
  ])

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="size-8 rounded-full bg-waliYellow flex items-center justify-center">
              <Image src="/filter.png" alt="" height={16} width={16} />
            </button>
            <button className="size-8 rounded-full bg-waliYellow flex items-center justify-center">
              <Image src="/sort.png" alt="" height={16} width={16} />
            </button>
            {role === "admin" && <FormModal table="event" type="create" />}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* Pagination */}

      <Pagination page={p} count={count} />
    </div>
  );
};

export default EventListPage;
