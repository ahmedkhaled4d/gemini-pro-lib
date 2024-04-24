import { runAdvancedChat } from "./modules/chat/advancedChat";

async function main() {
  try {
    console.log("Typescript gemini-pro Lib : API KEY");
    await runAdvancedChat();
  } catch (e) {
    console.error(e);
  }
}
main();
