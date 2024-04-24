import { genAI } from "../../utils/common";

export async function runSimpleContent() {
  // For text-only inputs, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Write a story about a magic backpack.";

  const { totalTokens } = await model.countTokens(prompt);
  console.log("Tokens count:", totalTokens);

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
}
