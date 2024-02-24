// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");


// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = prompt("Digite o primeiro valor: ");
let numberTwo = prompt("Digite o segundo valor: ");
let sum = Number(numberOne) + Number(numberTwo);
alert(`A soma dos dois valores é: ${sum}`);



// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for,
// exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let numberOrNotNumber = prompt(`Digite um valor:
(para saber se é numero ou não)`);

if(!isNaN(numberOrNotNumber)) {
    alert(`Seu valor é um número`)
} else{
    alert(`Seu valor não é um número`)
};



// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba
// a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let stringOrNotString = prompt(`Digite um valor:
(para saber se é string ou não)`);

if(!isNaN(stringOrNotString)) {
    alert(`Seu valor não é uma string`)
} else{
    alert(`Seu valor é uma string`)
};





// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a 
// mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let booleanOrNotBoolean = prompt(`Digite um valor:
(para saber se é booleano ou não)`);

let myBooleanTrue = "true";
let myBooleanFalse = "false";

if(typeof booleanOrNotBoolean === myBooleanTrue){
    alert("Seu valor é um Booleano")
} else if(typeof booleanOrNotBoolean === myBooleanFalse){
    alert("Seu valor é um Booleano")
} else {
    alert("Seu valor não é um Booleano")
};





// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
alert("Vamos fazer as seguintes operações com seus dois valores: Subtração, Multiplicação e divisão");
let value1 = prompt("Digite seu primeiro valor: ");
let value2 = prompt("Digite seu segundo valor: ");

let sub = Number(value1 - value2);
alert(`A subtração dos dois valores é: ${sub}`);




// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let multi = Number(value1 * value2);
alert(`A multiplicação do dois valores é: ${multi}`);



// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let div = Number(value1 / value2);
alert(`A divisão dos dois valores é: ${div}`);



// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se
// for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
alert("Vamos ver se a soma dos próximos dois valores é par");
let firstNumber = prompt("Digite seu primeiro valor: ");
let secondNumber = prompt("Digite seu segundo valor: ");
let somar = Number(firstNumber) + Number(secondNumber)

if(somar % 2 === 0){
    alert(`A soma de seus valores (${somar}) é par`)
} else{
    alert(`A soma de seus valores (${somar}) não é par`)
}





// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba
// a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
alert("Vamos ver se a soma dos próximos dois valores é impar");
let val1 = prompt("Digite seu primeiro valor: ");
let val2 = prompt("Digite seu segundo valor: ");
let soma = Number(val1) + Number(val2)

if(soma % 2 !== 0){
    alert(`A soma de sus valores (${soma}) é impar`)
} else{
    alert(`A soma de seus valores (${soma}) não é impar`)
}


