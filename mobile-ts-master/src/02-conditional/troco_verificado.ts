import promptSync from 'prompt-sync';
const prompt = promptSync();

const precoUnitario = Number(prompt("Preço unitário do produto: "));
const quantidade = Number(prompt("Quantidade comprada: "));
const dinheiroRecebido = Number(prompt("Dinheiro recebido: "));

const custoTotal = precoUnitario * quantidade;

if (dinheiroRecebido >= custoTotal) {
  
    const troco = dinheiroRecebido - custoTotal;
    console.log(`TROCO = ${troco.toFixed(2)}`);

} else {
    const faltam = custoTotal - dinheiroRecebido;
    console.log(`DINHEIRO INSUFICIENTE. FALTAM ${faltam.toFixed(2)} REAIS`);
}