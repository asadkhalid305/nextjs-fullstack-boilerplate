import { User } from "@prisma/client";
import { NextRequest } from "next/server";

export interface CustomUser {
  userId: string;
  role: string;
}
export interface CustomRequest extends NextRequest {
  user?: CustomUser;
}

export type FormData = Omit<User, "dateOfBirth" | "id"> & {
  dateOfBirth: string;
};
