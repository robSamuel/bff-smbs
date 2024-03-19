import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  const { params } = context;

  return NextResponse.json({
    status: 200,
    body: { message: `GET /api/post/${params.id}`}
  })
}