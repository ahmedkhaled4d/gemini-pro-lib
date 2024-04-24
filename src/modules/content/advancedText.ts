import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { displayTokenCount, genAI, streamToStdout } from "../../utils/common";

export async function runAdvancedText() {
  // For text-only inputs, use the gemini-pro model
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
    ],
  });

  const prompt = 'Please describe in detail the movie "Eyes wide shut"';

  displayTokenCount(model, prompt);

  const result = await model.generateContentStream(prompt);
  await streamToStdout(result.stream);

  // Display the aggregated response
  const response = await result.response;
  console.log(JSON.stringify(response, null, 2));
}
