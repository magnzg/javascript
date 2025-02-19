//Saudação Personalizada 
console.log("1 - Saudação Personalizada")
let nome = prompt("Qual o seu nome?")
let saudacao = function(nome) {
    console.log("Olá,", nome,"! Como vai?")
}
saudacao(nome)
console.log("ㅤ")

//Soma de Dois Números
console.log("2 - Soma de Dois Números")
let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite um número:"))
let soma = function(a,b) {
    let resultado = a + b
    return resultado
}
console.log(soma(a,b))
console.log("ㅤ")

//Cálculo de Área de Retângulo
console.log("3 - Cálculo de Área de Retângulo")
let area = function(base,altura) {
    let resultado = base * altura
    return resultado
}
console.log(area(5,3))
console.log("ㅤ")

//Dobro de um Número
console.log("4 - Dobro de um Número")
let numero = Number(prompt("Digite um número:"))
let dobro = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(dobro(numero))
console.log("ㅤ")

//Número ao Quadrado
console.log("5 - Número ao Quadrado")
let num = Number(prompt("Digite um número:"))
let quadrado = (numero) => {
    let resultado = numero * numero
    return resultado
}
console.log(quadrado(numero))
console.log("ㅤ")

//Verificação de Maioridade
console.log("6 - Verificação de Maioridade")
let idade = prompt("Qual sua idade?")
let maioridade = (idade) => {
    if(idade >= 18) {
        console.log("Maior de idade!")
    } else
    console.log("Menor de idade!")
}
console.log(maioridade(idade))
console.log("ㅤ")

//Cálculo de Média
console.log("7 - Cálculo de Média")
let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
let media = (numero) => {
    let resultado = (nota1 + nota2 + nota3) / 3
    return resultado
}
console.log(media(nota1,nota2,nota3))
console.log("ㅤ")