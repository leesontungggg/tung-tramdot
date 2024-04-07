import { NextRequest, NextResponse } from "next/server";
import { handleRegisterUser } from "@/services/user";

export async function POST(request: NextRequest) {
  const registerData = await request.json();
  if (registerData.email) {
    try {
      const result = await handleRegisterUser(registerData);
      if (result) {
        return NextResponse.json({ error: false, ...result });
      }
    } catch (error) {
      return NextResponse.json({ error });
    }
  }

  return NextResponse.json({ error: true });
}
