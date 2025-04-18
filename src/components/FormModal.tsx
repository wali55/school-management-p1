"use client";

import { deleteSubject } from "@/lib/actions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { FormContainerProps } from "./FormContainer";

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

const deleteActionMap = {
  subject: deleteSubject,
  class: deleteSubject,
  teacher: deleteSubject,
  student: deleteSubject,
  parent: deleteSubject,
  lesson: deleteSubject,
  exam: deleteSubject,
  assignment: deleteSubject,
  result: deleteSubject,
  attendance: deleteSubject,
  event: deleteSubject,
  announcement: deleteSubject,
}

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData
}: FormContainerProps & {relatedData?: any}) => {
  const [open, setOpen] = useState(false);
  
  const forms: {
    [key: string]: (setOpen: Dispatch<SetStateAction<boolean>>, type: "create" | "update", data?: any, relatedData?: any) => JSX.Element;
  } = {
    teacher: (setOpen, type, data) => <TeacherForm setOpen={setOpen} type={type} data={data} relatedData={relatedData} />,
    student: (setOpen, type, data) => <StudentForm setOpen={setOpen} type={type} data={data} relatedData={relatedData} />,
    parent: (setOpen, type, data) => <ParentForm setOpen={setOpen} type={type} data={data} relatedData={relatedData} />,
    subject: (setOpen, type, data, relatedData) => <SubjectForm setOpen={setOpen} type={type} data={data} relatedData={relatedData} />,
  };
  
  const size = type === "create" ? "size-8" : "size-7";
  const bgColor =
    type === "create"
      ? "bg-waliYellow"
      : type === "update"
      ? "bg-waliSky"
      : "bg-waliPurple";

  const Form = () => {
    const [state, formAction] = useFormState(deleteActionMap[table], {
      success: false, error: false
    })

    const router = useRouter();

    useEffect(() => {
      if (state.success) {
        toast(`${table[0].toUpperCase() + table.slice(1)} has been deleted successfully!`);
        setOpen(false);
        router.refresh();
      }
    }, [state]);

    return type === "delete" ? (
      <form action={formAction} className="p-4 flex flex-col gap-4">
        <input type="text | number" name="id" value={id} hidden />
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data, relatedData)
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
