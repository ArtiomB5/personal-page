"use server";
import { cookies } from "next/headers";

export async function setCookie() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value;
  cookieStore.set("theme", theme === "dark" ? "light" : "dark");
}
