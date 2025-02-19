//Exibição de Mensagem
console.log("1 - Exibição de Mensagem")
function JavaScript() {
    console.log("Eu gosto de JavaScript")
}
JavaScript()
console.log("ㅤ")

//Contagem de 1 a 5
console.log("2 - Contagem de 1 a 5")
function contarAteCinco() {
    for(let i = 1; i <= 5; i++) {
        console.log(i)
    }
}
contarAteCinco()
console.log("ㅤ")

//Saudação
console.log("3 - Saudação")
let nome = prompt("Qual o seu nome?")
function saudacao() {
    console.log("Olá,", nome,"! Seja bem-vindo(a)!")
}
saudacao()
console.log("ㅤ")

//Multiplicação de dois números
console.log("4 - Multiplicação de dois números")
function Multiplicação(a, b) {
    let resultado = a * b
    return resultado
}
console.log(Multiplicação(5, 3))
console.log("ㅤ")

//Verificação da idade 
console.log("5 - Verificação da idade")
let idade = prompt("Qual sua idade?")
function verificarIdade(idade) {
    if(idade >= 18) {
        console.log("Maior de idade!")
    } else
    console.log("Menor de idade!")
}
verificarIdade(idade)
console.log("ㅤ")

//Soma de Dois Números
console.log("6 - Soma de Dois Números")
let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite um número:"))
function somar(a, b) {
    let resultado = a + b
    return resultado
}
console.log(somar(a, b))
console.log("ㅤ")

//Área de um Retângulo
console.log("7 - Área de um Retângulo")
let largura = Number(prompt("Digite a largura:"))
let altura = Number(prompt("Digite a altura:"))
function calcularAreaRetangulo(largura, altura) {
    let resultado = largura * altura
    return resultado
}
console.log(calcularAreaRetangulo(largura, altura))
console.log("ㅤ")

//Área de um Retângulo
console.log("8 - Área de um Retângulo")
let idad = Number(prompt("Digite a idade de uma pessoa:"))
let idad1 = Number(prompt("Digite a idade de outra pessoa:"))
function compararIdade(idad, idad1) {
    if(idad > idad1) {
        console.log("A primeira pessoa é mais velha!")
    } else if (idad == idad1){
    console.log("As duas pessoas tem a mesma idade!")
    } else 
    console.log("A segunda pessoa é mais velha!")
}
compararIdade(idad, idad1)
console.log("ㅤ")

