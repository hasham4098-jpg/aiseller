import { NextResponse } from "next/server"
export async function POST(req: Request) {
  const { input } = await req.json()
  return NextResponse.json({ result: "wait - " + input })
}