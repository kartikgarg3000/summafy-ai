import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import Groq from "groq-sdk";

export const generateSummaryFromLLM = async (pdfText: string) => {
    try {
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            throw new Error("GROQ_API_KEY is not defined in environment variables.");
        }

        const groq = new Groq({ apiKey });

        console.log(`Generating summary using Groq for text of length: ${pdfText.length}`);

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: SUMMARY_SYSTEM_PROMPT
                },
                {
                    role: "user",
                    content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`
                }
            ],
            temperature: 0.7,
            max_tokens: 1500,
        });

        const responseContent = completion.choices[0]?.message?.content;

        if (!responseContent) {
            throw new Error("Empty response from Groq API");
        }

        return responseContent;
    } catch (error: any) {
        console.error("Error generating summary:", error?.message || error);
        throw error;
    }
};
