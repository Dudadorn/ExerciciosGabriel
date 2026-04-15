// Exercício 7
let cidades = Number(prompt("Quantas cidades deseja informar?"));

let maior = 0;
let somaV = 0;
let somaA = 0;
let contMenor2000 = 0;

for (let i = 1; i <= cidades; i++) {
    let veiculos = Number(prompt("Digite a quantidade de veículos:"));
    let acidentes = Number(prompt("Digite a quantidade de acidentes:"));

    if (acidentes > maior) {
        maior = acidentes;
    }

    somaV += veiculos;

    if (veiculos < 2000) {
        somaA += acidentes;
        contMenor2000++;
    }
}

console.log("Maior índice de acidentes:", maior);
console.log("Média de veículos:", somaV / cidades);

if (contMenor2000 > 0) {
    console.log("Média de acidentes em cidades com menos de 2000 veículos:", somaA / contMenor2000);
}
