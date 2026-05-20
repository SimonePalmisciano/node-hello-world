import { cowsay } from "cowsayjs";
import { ChatAnthropic } from "@langchain/anthropic";
import { HumanMessage } from "langchain";

const CLAUDE_API_KEY= process.env.CLAUDE_API_KEY;

const model = new ChatAnthropic({
    model: 'claude-haiku-4-5-20251001',
    apiKey: CLAUDE_API_KEY,
});

model.invoke([
    new HumanMessage('mi dici una barzelletta?')
]).then(aiResponse => {
    console.log(aiResponse.content);
});

const valoriPassatiDaCmd = process.argv;
const outputDrago = cowsay("sono il fantasma formaggino", {cow: 'stegosaurus'})