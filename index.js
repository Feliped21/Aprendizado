//Sai maldição
console.log("Olá mundo");

var x = 10;
var y = 10;
console.log(x == y);

const a = 100;
console.log(x*y+a);

console.log(x=10);
console.log(x===y);

if (x >= 5) {
    console.log("o valor é maior que 5.")
} else {
    console.log("o valor é menor que 5.")
}

if (y >= 20) {
    console.log("o valor é maior que 20.")
} else {
    console.log("o valor é menor que 20.")
}
resultado = x + y;
console.log(resultado);
console.log("bem vindo felipe!");

if (x > 100) {
    console.log("a variável x é maior que 100")
} else {
    console.log("a variável x não é maior que 100")
}

// Exemplo de loop for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Exemplo loop while
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// Exemplo de loop do-while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// Exemplo de loop for-of com array
let frutas = ['maçã','banana','laranja'];
for (let fruta of frutas) {
    console.log(fruta);
}

// Arrow function equivalente
const somaArrow = (a,b) => a + b;

const saudacao = () => "Ola, mundo";
console.log(saudacao());

const dobrar = x => x * 2;
console.log(dobrar(5));

const soma = (a,b) => a + b;
console.log(soma(3, 4));
