"use client";

import Image from "next/image";
import { useState } from "react";

const FormModal = ({table, type, data, id}: {
    table: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}) => {
    const size = type === "create" ? "size-8" : "size-7";
    const bgColor = type === "create" ? "bg-waliYellow" : type === "update" ? "bg-waliSky" : "bg-waliPurple";
    
    const [open, setOpen] = useState(false);
    return (
        <>
          <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={() => setOpen(true)}>
            <Image src={`/${type}.png`} alt="" width={16} height={16} />
          </button>
          {open && (
            <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                <div className="absolute top-4 right-5 cursor-pointer" onClick={() => setOpen(false)}>
                  <Image src="/close.png" alt="" width={14} height={14} />
                </div>
              </div>
            </div>
          )}
        </>
    )
}

export default FormModal;
