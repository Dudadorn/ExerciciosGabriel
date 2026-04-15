// Exercício 5
let qtdD = 0;
let qtdAB = 0;
let qtdE = 0;

for (let i = 1; i <= 10; i++) {
    let nota = Number(prompt("Digite a nota do aluno " + i + ":"));

    if (nota <= 2.9) {
        qtdE++;
    } else if (nota <= 4.9) {
        qtdD++;
    } else if (nota >= 7) {
        qtdAB++;
    }
}

let percentualE = (qtdE / 10) * 100;

console.log("Quantidade com conceito D:", qtdD);
console.log("Quantidade com conceito A ou B:", qtdAB);
console.log("Percentual com conceito E:", percentualE + "%");
