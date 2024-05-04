import { displayChatTokenCount, genAI } from "../../utils/common";

export async function runAdvancedChat() {
  // For dialog language tasks (like chat), use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello, I have 2 dogs in my house." }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const msg1 = "How many paws are in my house?";
  displayChatTokenCount(model, chat, msg1);
  const result1 = await chat.sendMessageStream(msg1);
  const response1 = await result1.response;
  // await streamToStdout(result1.stream);
  console.log(response1.text());

  const msg2 = "How many noses (including mine)?";
  displayChatTokenCount(model, chat, msg2);
  const result2 = await chat.sendMessageStream(msg2);
  const response2 = await result2.response;

  // await streamToStdout(result2.stream);
  console.log(response2.text());

  // Display history
  // console.log(JSON.stringify(await chat.getHistory(), null, 2));

  // Display the last aggregated response
  // const response = await result2.response;
  // console.log(JSON.stringify(response, null, 2));
}
