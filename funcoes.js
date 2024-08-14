
function primeiraFuncao () {
    console.log('Hello World das funções');
}

primeiraFuncao(); //aqui chamo a função

function dizerNome(nome) {
    console.log(`O nome é ${nome}`);
}

dizerNome('Gabriel'); //aqui chamo a função
dizerNome('Sidinei'); //aqui chamo a função
dizerNome('Débora'); //aqui chamo a função

var nomeDoBancoDeDados = 'João';

dizerNome(nomeDoBancoDeDados); //aqui chamo a função

function soma (a, b) {
    var soma = a + b;
    return soma; //retorna algo, retorna a soma nesse caso
}

var somaUm = soma(2, 5); //aqui chamo a função
console.log(somaUm);

var somaDois = soma(50, 25); //aqui chamo a função
console.log(somaDois);

//outro jeito também:
console.log(soma(2, 5)); //aqui chamo a função
