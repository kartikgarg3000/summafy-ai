import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

const envPath = path.join(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");
const match = envContent.match(/GEMINI_KEY=(.*)/);
const apiKey = match ? match[1].replace(/['"]/g, "").trim() : null;

async function run() {
  const results = {};
  if (!apiKey) {
    results.error = "GEMINI_KEY not found in .env.local";
    fs.writeFileSync("test-results.json", JSON.stringify(results, null, 2));
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  
  const modelsToTest = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-1.5-pro", "gemini-2.0-flash", "gemini-2.0-flash-exp", "gemini-pro", "gemini-1.0-pro"];
  
  for (const modelId of modelsToTest) {
    try {
      const model = genAI.getGenerativeModel({ model: modelId });
      const result = await model.generateContent("hello");
      const response = await result.response;
      results[modelId] = "ACTIVE";
    } catch (e) {
      results[modelId] = `FAILED: ${e.message.split('\n')[0]}`;
    }
  }

  fs.writeFileSync("test-results.json", JSON.stringify(results, null, 2));
  console.log("Done");
}

run();
