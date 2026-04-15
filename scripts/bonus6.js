// Exercício 6
let menores18 = 0;
let somaIdade = 0;
let somaAltura = 0;
let acima80 = 0;

for (let i = 1; i <= 5; i++) {
    let idade = Number(prompt("Digite a idade:"));
    let peso = Number(prompt("Digite o peso:"));
    let altura = Number(prompt("Digite a altura:"));

    if (idade < 18) {
        menores18++;
    }

    if (peso > 80) {
        acima80++;
    }

    somaIdade += idade;
    somaAltura += altura;
}

console.log("Menores de 18:", menores18);
console.log("Média das idades:", somaIdade / 5);
console.log("Média das alturas:", somaAltura / 5);
console.log("Mais de 80kg:", acima80);
