"use client";
import { setCookie } from "./setCookie";

export function ThemeChanger() {
  return (
    <form action={setCookie}>
      <button type="submit">Change Theme</button>
    </form>
  );
}