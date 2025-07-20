import { getPolicy } from "@/utils/cms";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const policy = await getPolicy("privacyPolicy");

  if (!policy) {
    return NextResponse.redirect(new URL("/404", req.url));
  }

  const response = await fetch(policy.privacyPolicy!);
  if (!response.ok) {
    return new Response("Failed to fetch PDF", { status: 500 });
  }

  const fileBuffer = await response.arrayBuffer();

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${encodeURIComponent(policy.privacyPolicy!)}.pdf"`,
    },
  });
}
