import { cowsay } from "cowsayjs";
import { ChatAnthropic } from "@langchain/anthropic";
import { HumanMessage } from "langchain";

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
let valoriPassatiDaCmd = process.argv.slice(2);

const model = new ChatAnthropic({
    model: 'claude-haiku-4-5-20251001',
    apiKey: CLAUDE_API_KEY,
});


if (valoriPassatiDaCmd.length === 0) {
    console.log('PRIMA DI TUTTO SCRIVI UN COMANDO DA MANDARE A CLAUDIO-AI SCRIVENDO IL COMANDO "pnpm start "stringa come prompt" RICEVERAI RISPOSTA DA UN CLAUDIO-AI-STEGOSAURO" ');
} else {
    const stringaDiComandoRicevuta = valoriPassatiDaCmd.join(" ");
    model.invoke([
        new HumanMessage(stringaDiComandoRicevuta)
    ]).then(aiResponse => {
        console.log(cowsay(aiResponse.content, { cow: 'stegosaurus' }));
    });
}