import promptSync from 'prompt-sync';
const prompt = promptSync();

const horaInicial = Number(prompt("Hora inicial: "));
const horaFinal = Number(prompt("Hora final: "));

let duracao = 0;

if (horaFinal > horaInicial) {

    duracao = horaFinal - horaInicial;
} else {

    duracao = (24 - horaInicial) + horaFinal;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);