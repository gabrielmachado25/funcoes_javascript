//SOBRE ARRAY/VETOR:
console.log('SOBRE ARRAY/VETOR');
var times = ['Corinthians', 'São Paulo', 'Palmeiras', 'Santos'];
/*aqui eu criei uma variável chamada 'times' e dentro dos colchetes atribuiu
a esta variável 4 times*/

//quando criamos uma variável no js usando esses colchetes, criamos um VETOR
/*esse vetor ali tem tamanho 4
- Índice 0: Corinthians
- Índice 1: São Paulo
- Índice 2: Palmeiras
- Índice 3: Santos
*/

console.log(times[1]);
//seleciona control + s para salvar aí depois fn + F8 para aparecer no console

console.log(times[4]); //aqui vai aparecer 'undefined' pois não tem índice 4

console.log(times.length); //aqui me fala o tamanho do array

console.log(times); //aqui ele me exibe o conteúdo do vetor

console.table(times); //aqui uma visualização mais simples, versão tabela

times[2] = 'Flamengo'; //aqui eu troco o nome do índice 2

console.table(times); //aqui uma visualização mais simples, versão tabela

console.log(); //linha em branco para dar um espaço

//SOBRE ARRAY MULTIDIMENSIONAL OU MATRIZ:
console.log('ARRAY MULTIDIMENSIONAL OU MATRIZ');

//notas dos alunos
var boletim = [[8,7,9,3],[4,5,8,6]];

console.table(boletim); /*aqui ele retorna esse array multidimensional/matriz em 
tabela, fica mais fácil de visualizar */

console.log(boletim[1][2]); //recuperar uma nota no meio da matriz
//o primeiro colchete se refere a linha
//o segundo colchete se refere a coluna