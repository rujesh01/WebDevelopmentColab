import { db } from "./db";

interface Props {
  email: string;
}

export const getUserByEmail = async ({ email }: Props) => {
  try {
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};
