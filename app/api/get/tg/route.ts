import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let response;
  console.log("GET-TG", { request });
  try {
    const tgToken = process.env.TELEGRAM_TOKEN;
    const feedback = await fetch(
      `https://api.telegram.org/${tgToken}/getUpdates?chat_id=@mywebdevnotes&limit=15`,
      {
        method: "GET",
      }
    );
    console.log('tgToken', tgToken)
    const data = await feedback.json();
    const posts = data["result"].filter((i: any) =>
      i.hasOwnProperty("channel_post")
    );
    response = {
      status: 200,
      data: posts,
    };
  } catch {
    response = {
      status: 404,
      data: {},
    };
  }
  return new NextResponse(JSON.stringify(response.data), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
