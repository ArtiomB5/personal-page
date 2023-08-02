import { NextResponse } from "next/server";

const getUrl = (pageText: string) => {
  return pageText
    .split("/><")
    .filter((textNode) => textNode.includes("og:image"))[0]
    .split('"')
    .filter((textNode) => textNode.includes("http"))[0];
};

export async function GET(request: Request) {
  let response;
  try {
    const lightFeedback= await fetch(process.env.IMAGE_LIGHT as string, {
      method: "GET",
    });
    const darkFeedback = await fetch(process.env.IMAGE_DARK as string, {
      method: "GET",
    });
    const light = await lightFeedback.text();
    const dark = await darkFeedback.text();

    const imagesUrls = {
      light: getUrl(light),
      dark: getUrl(dark),
    }
    // const url = (await feedback.text())
    //   .split("/><")
    //   .filter((textNode) => textNode.includes("og:image"))[0]
    //   .split('"')
    //   .filter((textNode) => textNode.includes("http"))[0];
    // const img = await fetch(url)
    //   .then(res => res.blob()) // Gets the response and returns it as a blob
    //   .then(blob => {
    //     // Here's where you get access to the blob
    //     // And you can use it for whatever you want
    //     // Like calling ref().put(blob)

    //     // Here, I use it to make an image appear on the page
    //     let objectURL = URL.createObjectURL(blob);
    //     let myImage = new Image();
    //     myImage.src = objectURL;
    //     return myImage
    // });
    // console.log("tgToken", data);
    response = {
      status: 200,
      data: imagesUrls,
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
