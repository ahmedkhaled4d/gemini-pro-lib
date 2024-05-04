import { runAdvancedText } from "./modules/content/advancedText";

async function main() {
  try {
    console.log("Typescript gemini-pro Lib : API KEY");
    await runAdvancedText();
  } catch (e) {
    console.error(e);
  }
}
main();
