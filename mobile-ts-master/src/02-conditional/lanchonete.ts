import promptSync from 'prompt-sync';
const prompt = promptSync();

const codigo = Number(prompt("Codigo do produto comprado: "));
const quantidade = Number(prompt("Quantidade comprada: "));

let precoUnitario = 0;

switch (codigo) {
    case 1:
        precoUnitario = 5.00;
        break; 

    case 2:
        precoUnitario = 3.50;
        break;

    case 3:
        precoUnitario = 4.80;
        break;

    case 4:
        precoUnitario = 8.90;
        break;

    case 5:
        precoUnitario = 7.32;
        break;

    default:
        console.log("Código de produto inválido!");
        break;
}

const valorTotal = precoUnitario * quantidade;

if (precoUnitario > 0) {
    console.log(`Valor a pagar: R$ ${valorTotal.toFixed(2)}`);
}