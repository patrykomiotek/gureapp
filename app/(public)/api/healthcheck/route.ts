import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  console.log(request);

  return NextResponse.json({ message: "super!" });
}
