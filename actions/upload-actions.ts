"use server";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { getDbConnection } from "@/lib/db";
import { generateSummaryFromGemini } from "@/lib/geminiai";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { ClientUploadedFileData } from "uploadthing/types";

interface PdfSummaryType {
  userId: string;
  fileUrl: string;
  summary: string;
  title: string;
  fileName: string;
}

type StorePdfSummaryResponse = {
  success: boolean;
  message: string;
  data?: any;
};

export async function generatePdfSummary(
  uploadResponse: ClientUploadedFileData<ourFileRouter>[]
): Promise<StorePdfSummaryResponse> {
  const fileInfo = uploadResponse?.[0];

  if (!fileInfo?.url) {
    return {
      success: false,
      message: "Invalid file data",
      data: null,
    };
  }

  const pdfUrl = fileInfo.url;

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);

    const summary = await generateSummaryFromGemini(pdfText);

    return {
      success: true,
      message: "Summary generated successfully",
      data: {
        summary,
        fileUrl: pdfUrl,
        title: pdfText.split("\n")[0]?.slice(0, 100) || "Untitled Document", // or some smarter title logic
        fileName: fileInfo.name,
      },
    };
  } catch (err) {
    console.error("Summary generation failed", err);
    return {
      success: false,
      message: "Failed to generate summary",
      data: null,
    };
  }
}

async function savePdfSummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) {
  try {
    const sql = await getDbConnection();

    const result = await sql`
      INSERT INTO pdf_summaries (user_id, original_file_url, summary_text, title, file_name)
      VALUES (${userId}, ${fileUrl}, ${summary}, ${title}, ${fileName})
      RETURNING *;
    `;

    return result?.[0] ?? null;
  } catch (error) {
    console.error("DB save error:", error);
    return null;
  }
}

export async function storePdfSummaryAction({
  fileUrl,
  summary,
  title,
  fileName,
}: Omit<PdfSummaryType, "userId">) {
  let savedSummary: any;
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "User not authenticated.",
      };
    }

    savedSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });

    if (!savedSummary) {
      return {
        success: false,
        message: "Failed to save PDF summary.",
      };
    }


  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "error saving PDF Summary"

    }
  }
  //reva;idate path
  revalidatePath(`/summaries/${savedSummary.id}`)

  return {
    success: true,
    message: "Summary saved successfully.",
    data: {savedSummary}
  };
}
