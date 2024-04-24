import { runSimpleContent } from "./modules/content/simpleContent";

async function main() {
  try {
    console.log("Typescript gemini-pro Lib : API KEY");
    await runSimpleContent();
  } catch (e) {
    console.error(e);
  }
}
main();
