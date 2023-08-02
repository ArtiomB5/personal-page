import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { GetQueriesKeyType, getQueries } from "../getQueries";
import { cookies } from "next/headers";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  let response;
  const id = params.id as GetQueriesKeyType;
  try {
    const feedback = await getQueries[id]();

    response = {
      status: 200,
      data: feedback,
    };
    console.log(`GET-${id}`, feedback);
  } catch {
    response = {
      status: 404,
      data: {},
    };
  }

  return new NextResponse(JSON.stringify(response.data), {
    status: response.status,
    headers: { "Content-Type": "application/json"},
  });
}
