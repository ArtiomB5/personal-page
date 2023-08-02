import { NextApiRequest } from "next";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const data = await request.json();

  return new Response("Theme is dark", {
    status: 201,
    headers: { "Set-Cookie": `theme=${data.theme}` },
  });
}
