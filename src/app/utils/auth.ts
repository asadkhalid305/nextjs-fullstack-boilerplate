import { SignJWT, jwtVerify } from "jose";
import { CustomUser } from "@/utils/types";
import { tokenAlgorithm, tokenExpiry } from "@/utils/constants";

export async function generateToken(user: CustomUser) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
  return new SignJWT({ ...user })
    .setProtectedHeader({ alg: tokenAlgorithm })
    .setExpirationTime(tokenExpiry)
    .sign(secret);
}

export async function verifyToken(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
  const { payload } = await jwtVerify(token, secret);
  return payload as unknown as CustomUser;
}
