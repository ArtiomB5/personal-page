import { NextResponse } from "next/server";
import { PostQueriesKeyType, postQueries } from "../postQueries";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  let response;
  const id = params.id as PostQueriesKeyType;
  try {
    const feedback = await postQueries[id](await request.json());

    response = {
      status: 201,
      data: feedback,
    };
  } catch {
    response = {
      status: 400,
      data: {},
    };
  }
  return new NextResponse(JSON.stringify(response.data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
