import { NextRequest, NextResponse } from "next/server";
import { handleGetCurrentUser, handleLoginUser } from "@/services/user";

export async function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams.get("apikey"));
  const apikey = request.nextUrl.searchParams.get("apikey");
  if (apikey) {
    try {
      const result = await handleGetCurrentUser(apikey);
      if (result) {
        return NextResponse.json({ error: false, ...result });
      }
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  return NextResponse.json({ error: true });
}
