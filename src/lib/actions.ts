"use server";

import { revalidatePath } from "next/cache";
import { SubjectSchema } from "./formValidationSchemas";
import { prisma } from "./prisma";

type CurrentState = { success: Boolean; error: Boolean };

export const createSubject = async (currentState: CurrentState, data: SubjectSchema) => {
  try {
    await prisma.subjects.create({
      data: {
        name: data.name,
      },
    });

    revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};
