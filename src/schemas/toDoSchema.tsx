import { z } from "zod";

export const toDoSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters" }),
  priority: z.enum(["High", "Medium", "Low"], {
    message: "Select a valid priority",
  }),
  category: z.enum(["Personal", "Work", "Study"], {
    message: "Select a valid category",
  }),
  deadline: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "Enter a valid date and time",
  }),
});

export type ToDoFormValues = z.infer<typeof toDoSchema>;
