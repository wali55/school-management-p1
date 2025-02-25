import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

const columns = [
  {header: "Info", accessor: "info"},
  {header: "Teacher ID", accessor: "teacherId", className: "hidden md:table-cell"},
  {header: "Subjects", accessor: "subjects", className: "hidden md:table-cell"},
  {header: "Classes", accessor: "classes", className: "hidden md:table-cell"},
  {header: "Phone", accessor: "phone", className: "hidden lg:table-cell"},
  {header: "Address", accessor: "address", className: "hidden lg:table-cell"},
  {header: "Actions", accessor: "action", className: "hidden lg:table-cell"},
]

const TeacherListPage = () => {

  const renderRow = (item: Teacher) => {
    <tr>
      <td>
        <Image src={item.photo} alt="" width={40} height={40} className="md:hidden xl:block size-10 rounded-full object-cover" />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
    </tr>
  }
  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="size-8 rounded-full bg-waliYellow flex items-center justify-center">
              <Image src="/filter.png" alt="" height={14} width={14} />
            </button>
            <button className="size-8 rounded-full bg-waliYellow flex items-center justify-center">
              <Image src="/sort.png" alt="" height={14} width={14} />
            </button>
            <button className="size-8 rounded-full bg-waliYellow flex items-center justify-center">
              <Image src="/plus.png" alt="" height={14} width={14} />
            </button>
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
