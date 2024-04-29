//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

//let mensagem = 'Boas vindas ao nosso site: ';
//alert (mensagem);

// Declare uma variável chamada nome e atribua a ela o valor "Lua".

//let nome = 'lua';

//Crie uma variável chamada idade e atribua a ela o valor 25:

//let idade = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.

//let numeroDeVendas = 50;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000. 

//let saldoDisponivel = 1000; 

//Exiba um alerta com o texto "Erro! Preencha todos os campos";

/* let mensagem = 'Erro! Preencha todos os campos';
alert (mensagem);  */

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
/* let mensagemDeErro = 'Erro! Preencha todos os campos';
alert (mensagemDeErro); */

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

/* let nome = prompt('Digite o seu nome');
 */

//peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
/* let idade = prompt ('informe sua idade: ');  */

//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

/* let idade = prompt ('informe sua idade: ');

if (idade>=18){
    alert('pode tirar sua habilitação');
} else {
    alert('ainda não é possível tirar a habilitação')
}
 */

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
/* let diaDaSemana = prompt ('Qual o dia da semana? segunda, terça, quarta, quinta, sexta, sábado ou domingo');

switch (diaDaSemana) {
    case 'segunda'||'SEGUNDA'||'Segunda'||'SEgunda'||'SEGunda'||'SEGUnda'||'SEGUNda':
      alert ('Tenha uma boa semana! ');
        break;
    case 'terça'||'Terça'||'TErça'||'TERça'||'TERÇa'||'TERÇA':
      alert ('Tenha uma boa semana! ');
        break;
    case 'quarta'||'Quarta'||'QUarta'||'QUArta'||'QUARta'||'QUARTa'||'QUARTA':
      alert ('Tenha uma boa semana! ');
        break;
    case 'quinta'||'Quinta'||'QUinta'||'QUInta'||'QUINta'||'QUINTa'||'QUINTA':
      alert ('Tenha uma boa semana! ');  
        break;
    case 'sexta'||'Sexta'||'SExta'||'SEXta'||'SEXTa'||'SEXTA':
      alert ('Tenha uma bom fim de semana! ');
        break;
    case 'sábado'||'Sábado'||'SÁbado'||'SÁBado'||'SÁBAdo'||'SÁBADo'||'SÁBADO':
      alert ('Tenha um bom fim de semana! ') 
        break;  
    case 'domingo'||'Domingo'||'DOmingo'||'DOMingo'||'DOMIngo'||'DOMINgo'||'DOMINGo'||'DOMINGO':
      alert ('Tenha um bom fim de semana! ')     
      break;
    default:
      alert ('digite um dia válido! ')
      break;
  }  */
//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

/* let numero = prompt ('informe um numero: ');

if (numero>=0){
    alert('o número digitado é positivo!! '); 
} else  if(numero<0){
    alert('o número digitado é negativo!! ');
} else {
    alert('valor inválido ');
}
 */

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

/* let pontuação = prompt ('informe sua pontuação do jogo! ');
if (pontuação >= 100 ){
 alert('Parabéns, você venceu! ');
} else {
    alert ('Tente novamente para ganhar! ');
}
 */

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

/* let informacao = prompt ('informe o saldo que aparece na sua conta! ');

if (informacao>0){
alert (`O saldo da conta é: ${informacao} reais`);
} else if(informacao<0){
    alert (`O saldo da conta é: ${informacao} reais`);
} else{
    alert('informe um valor válido! ');
} */

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome. 

/* let nome = prompt ('Informe seu nome: ');

alert (`Seja bem vindo ${nome}`); */

//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas. 
/* let nome = prompt ('informe seu nome: ');
console.log ('Bem vindo '+nome); */

/* let nome = prompt ('informe seu nome: ');
console.log (`Bem vindo ${nome}` ); */

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador. 
/* let nome = prompt ('informe seu nome: ');
console.log (`Bem vindo ${nome}` ); */

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!". 
/* let nome = prompt ('informe seu nome: ');
alert (`Bem vindo ${nome}` );
 */

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador. 
/* 
let linguagemPreferida = prompt ('Qual a linguagem de programação que você mais gosta?  '); 
console.log (`A linguagem de programação é: ${linguagemPreferida}`);

 */
//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado 
//em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console. 

//parei 
let valor1 = prompt ('informe o primeiro valor: ');
let valor2 = prompt ('informe o segundo valor: ');
var soma; 


if(valor1>=0&&valor2>=0){
soma == valor1+valor2;
console.log(`a soma dos dois valores é: ${soma}`);
} else if(valor1<0&&valor2<0){
soma == valor1+valor2;
console.log(`a soma dos dois valores é: ${soma}`);
} else{
    alert('valor inválido!!! ');
}
//parei aqui dia 29/04 às 17:41