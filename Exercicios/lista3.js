//Verificação de Maioridade
console.log("1 - Verificação de Maioridade")
let idade = prompt("Qual sua idade? ")
console.log("Sua idade é", idade)

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}
console.log("---------------------------------------")
//Verificação de Paridade
console.log("2 - Verificação de Paridade")
let numero = prompt("Escolha um número:")
let resultado = numero % 2 //resto
if (resultado == 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}
console.log("--------------------------------------")
//Verificação de Aprovado
console.log("3 - Verificação de Aprovado")
let nota1 = prompt("Qual a primeira nota:")
let nota2 = prompt("Qual a segunda nota:")
let total = (nota1 + nota2) / 2
if (total >= 7){
    console.log("Aprovado")
}else {
    console.log("Reprovado")
}
console.log("--------------------------------------")
//Comparar Idade para Entrada em Evento
console.log("4 - Comparar Idade para Entrada em Evento")
let idad = prompt("Qual sua idade? ")

if (idad >= 18) {
    console.log("Entrada permitida")
} else {
    console.log("Entrada proibida")
}
console.log("--------------------------------------")
//Verificar Senha
console.log("5 - Verificar Senha")
let senha = prompt("Digite a senha: ")

if (senha = 1234) {
    console.log("Senha correta!")
} else {
    console.log("Senha incorreta")
}
console.log("--------------------------------------")
//Verificar Temperatura
console.log("6 - Verificar Temperatura")
let temperatura = prompt("Digite a temperatura: ")

if (temperatura > 30) {
    console.log("Está quente!")
} else {
    console.log("Está frio")
}
console.log("--------------------------------------")
//Verificar se Número é Positivo ou Negativo
console.log("7 - Verificar se Número é Positivo ou Negativo")
let num = prompt("Escolha um número:")
if (num >= 0) {
    console.log("O número é positivo")
} else {
    console.log("O número é negativo")
}
console.log("--------------------------------------")