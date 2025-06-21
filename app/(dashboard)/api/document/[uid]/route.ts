import { auth } from "@/auth";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { uid: string } }
) {
  const userSession = await auth();

  if (!userSession) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { uid } = params;

  if (!uid) {
    return NextResponse.json(
      { error: "Document ID is required" },
      { status: 400 }
    );
  }

  let document;

  try {
    document = await db.document.findUnique({
      where: { id: uid },
    });
  } catch (error) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 });
  }

  if (!document) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 });
  }

  console.log("got the new document and sending it back");
  return NextResponse.json(document);
}
