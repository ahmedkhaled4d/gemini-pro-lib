import { simpleChat } from "./modules/chat/simpleChat";

async function main() {
  try {
    console.log("Typescript gemini-pro Lib : API KEY");
    await simpleChat();
  } catch (e) {
    console.error(e);
  }
}
main();
