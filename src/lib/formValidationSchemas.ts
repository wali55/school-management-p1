import { z } from "zod";

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z
    .string()
    .min(1, { message: "Subject name is required!" })
});

export type SubjectSchema = z.infer<typeof subjectSchema>
