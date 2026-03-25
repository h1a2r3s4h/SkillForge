export const runtime = "nodejs";
import { NextResponse } from "next/server";
import mammoth from "mammoth";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name.toLowerCase();
    let extractedText = "";

    if (fileName.endsWith(".pdf")) {
      // Use require inside a wrapper to avoid pdf-parse running its test on import
      const pdfParse = (await import("pdf-parse/lib/pdf-parse.js")).default;
      const parsed = await pdfParse(buffer);
      extractedText = parsed.text || "";
    } else if (fileName.endsWith(".docx")) {
      const parsed = await mammoth.extractRawText({ buffer });
      extractedText = parsed.value || "";
    } else {
      return NextResponse.json(
        { success: false, message: "Unsupported file type" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      text: extractedText.trim(),
    });
  } catch (error) {
    console.error("Parse Resume Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to parse resume" },
      { status: 500 }
    );
  }
}