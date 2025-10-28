import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n = Number(prompt("Deseja a tabuada para qual valor?: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n*i}`)
}