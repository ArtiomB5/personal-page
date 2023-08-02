import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: Request) {
    let response;
    try {
        const reqJson = await request.json() as { id: string };

        const feedback = await prisma.$queryRaw`
            DELETE FROM companies
            WHERE id = ${reqJson.id};
        `;

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
