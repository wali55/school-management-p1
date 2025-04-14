"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>
})

const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>
})
const ParentForm = dynamic(() => import("./forms/ParentForm"), {
  loading: () => <h1>Loading...</h1>
})
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Loading...</h1>
})

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
}) => {
  const [open, setOpen] = useState(false);
  
  const forms: {
    [key: string]: (setOpen: Dispatch<SetStateAction<boolean>>, type: "create" | "update", data?: any) => JSX.Element;
  } = {
    teacher: (setOpen, type, data) => <TeacherForm setOpen={setOpen} type={type} data={data} />,
    student: (setOpen, type, data) => <StudentForm setOpen={setOpen} type={type} data={data} />,
    parent: (setOpen, type, data) => <ParentForm setOpen={setOpen} type={type} data={data} />,
    subject: (setOpen, type, data) => <SubjectForm setOpen={setOpen} type={type} data={data} />,
  };
  

  const size = type === "create" ? "size-8" : "size-7";
  const bgColor =
    type === "create"
      ? "bg-waliYellow"
      : type === "update"
      ? "bg-waliSky"
      : "bg-waliPurple";

  const Form = () => {
    return type === "delete" ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data)
    ) : "Table not found!"
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-5 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
