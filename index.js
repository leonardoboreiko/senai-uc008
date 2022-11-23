readlineSync = require('readline-sync');

let cadastro = [];
let continuar = "s";
let nomeParticipante = "";
let idade = 0;
quantidadeDeParticipantes = 0;

while (continuar === "s") {
    nomeParticipante = readlineSync.question('Digite seu nome');
    idade = parseFloat(readlineSync.question('Digite sua idade'));
    if (idade > 18 ) {
        cadastro.unshift(nome);
        cadastro.unshift(idade);     
    } else {
        console.log("Cadastro não é permitido pela idade!");        
    }
    if (quantidadeDeParticipantes < 100) {
        quantidadeDeParticipantes++
    } else {
        console.log("Cadastro não é permitido pelo excesso de participantes!");
    }
    continuar = readlineSync.question('Informe S para um novo cadastro.');
}
console.log("Lista de participantes cadastrados:");
cadastro.forEach(participante => {
    console.log(participante);
});

