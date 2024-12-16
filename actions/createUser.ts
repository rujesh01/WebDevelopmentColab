"use server";

import { z } from "zod";
import { formSchema } from "../data/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";

const createUser = async (values: z.infer<typeof formSchema>) => {
  const validateForm = await formSchema.safeParse(values);

  if (!validateForm.success) {
    return { error: "something went wrong" };
  }

  const { email, name } = validateForm.data;

  const user = await getUserByEmail({ email });

  if (user) {
    return { error: "user already exist" };
  }

  await db.user.create({
    data: {
      name,
      email,
    },
  });

  return { success: "user created" };
};

export default createUser;
