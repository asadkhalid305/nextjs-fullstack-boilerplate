import { User } from "@prisma/client";

export const setUser = (user: User) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(sessionStorage.getItem("user") || "{}");
};

export const clearUser = () => {
  sessionStorage.removeItem("user");
};
