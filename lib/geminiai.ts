import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateSummaryFromGemini = async (pdfText: string) => {
    try {
        const apiKey = process.env.GEMINI_KEY;

        if (!apiKey) {
            throw new Error("GEMINI_API_KEY is not defined in environment variables.");
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash", generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1500
            }
        });
        const prompt = {
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `${SUMMARY_SYSTEM_PROMPT}
      
      Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:
      
      ${pdfText}`
                        }
                    ]
                }
            ]
        };

        const result = await model.generateContent(prompt);
        const response = await result.response;
        if(!response.text()){
            throw new Error("Empty response from Gemini API")
        }

        return response.text();
    } catch (error) {
        console.error("Error generating summary:", error);
        throw error;
    }
};
