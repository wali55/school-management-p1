import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

const TeacherListPage = () => {
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
      <div></div>
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
