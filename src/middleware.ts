import { NextRequest, NextResponse, userAgent } from "next/server";
import { headers } from "next/headers";

export function middleware(request: NextRequest) {
  // console.log({ request });
  const url = request.nextUrl;
  const { device } = userAgent(request);
  const userDevice = "mobile";

  // console.log({ agent });
  url.searchParams.append("device", userDevice);
  // header x-device: userDevice
  const headersList = headers();

  const response = NextResponse.rewrite(url);
  response.headers.set("x-device", userDevice);

  return response;
}
