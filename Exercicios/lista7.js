//Contador
console.log("1 - Contador")
let contador = 1
while(contador <= 10) {
    console.log(contador) 
    contador++ 
}
console.log("_______________________________________________")

//Tabuada
console.log("2 - Tabuada")
let numero = prompt("Digite um número:")
let multiplicador = 1
while (multiplicador <= 10) {
    let resultado = numero * multiplicador
    console.log(numero, "X", multiplicador, "=", resultado) 
    multiplicador += 1 
}
console.log("_______________________________________________")

//Contagem Regressiva
console.log("3 - Contagem Regressiva")
let cRegressiva = 10
while (cRegressiva >= 1) {
    console.log(cRegressiva)
    cRegressiva-- 
}
console.log("_______________________________________________")

//Verificação de senha
console.log("4 - Verificação de senha")
let senha = prompt("Digite a senha:")
while (senha != "12345") {
    senha = prompt("Tente novamente")
    if (senha == "12345") {
        console.log("Acertou!")
    }
}
console.log("_______________________________________________")

//Contador
console.log("5 - Contador")
let contador2 = 50
while(contador2 <= 100) {
    console.log(contador2) 
    contador2++ 
}
console.log("_______________________________________________")

//Sequência numérica
console.log("6 -  Sequência numérica")
let contador5 = 0
while(contador5 <= 100) {
    console.log(contador5) 
    contador5+=5
}
console.log("_______________________________________________")

//Mostrando mensagem
console.log("7 - Mostrando mensagem")
let contador3 = 1
while(contador3 <= 5) {
    console.log("Eu gosto de JavaScript") 
    contador3++ 
}
console.log("_______________________________________________")

//Exibindo o nome
console.log("8 - Exibindo o nome")
let nome = prompt("Digite um nome:")
let numero2 = prompt("Digite um número:")
while (numero2 >= 1) {
    console.log(nome)
    numero2--
}
console.log("_______________________________________________")