"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { subjectSchema, SubjectSchema } from "@/lib/formValidationSchemas";
import { createSubject } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Span } from "next/dist/trace";

const SubjectForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubjectSchema>({ resolver: zodResolver(subjectSchema) });

  const [state, formAction] = useFormState(createSubject, {
    success: false,
    error: false
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    createSubject(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new Subject" : "Update the Subject"}
      </h1>
      <div className="flex justify-between gap-4 flex-wrap">
        <InputField
          label="Subject name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
      </div>
      {state.error && <span className="text-xs text-red-500">Something went wrong!</span>}
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default SubjectForm;
