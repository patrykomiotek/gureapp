import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  // console.log({ request });
  const agent = userAgent(request);

  console.log({ agent });

  return NextResponse.next();
}
