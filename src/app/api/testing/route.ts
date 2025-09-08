import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    return Response.json({ data: "dummy data" });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response("Invalid JSON", { status: 400 });
  }
}
