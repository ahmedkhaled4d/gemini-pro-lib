import { genAI } from "../../utils/common";

export async function runSimpleChat() {
  // For dialog language tasks (like chat), use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat();

  const msg = "whats's your name ?";

  const result = await chat.sendMessage(msg);
  const response = result.response;
  const text = response.text();
  console.log(text);
}
