import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { cache } from "react";

export const isAuthenticatedUser = cache(async () => {
  const { isAuthenticated } = getKindeServerSession();

  const user = await isAuthenticated();
  return user;
});

export const userId = cache(async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Login required");
  }

  return user.id;
});
