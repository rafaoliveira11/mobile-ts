import promptSync from 'prompt-sync';
const prompt = promptSync();
const escala = prompt("Voce vai digitar a temperatura em qual escala (C/F)? ");

if (escala === 'F' || escala === 'f') {

    const tempF = Number(prompt("Digite a temperatura em Fahrenheit: "));
    
    const tempC = 5.0 / 9.0 * (tempF - 32);
    
    console.log(`Temperatura equivalente em Celsius: ${tempC.toFixed(2)}`);

} else if (escala === 'C' || escala === 'c') {

    const tempC = Number(prompt("Digite a temperatura em Celsius: "));
    const tempF = (tempC * 9.0 / 5.0) + 32;
    
    console.log(`Temperatura equivalente em Fahrenheit: ${tempF.toFixed(2)}`);

} else {
    console.log("Escala inválida!");
}