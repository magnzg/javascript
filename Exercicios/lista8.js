//Contador
console.log("1 - Contador")
let contador = 1
do { 
    console.log(contador)
    contador++
} while (contador <= 20)
console.log("_______________________________________________")

//Resposta do usuário
console.log("2 - Resposta do usuário")
let resposta
do {
    resposta = prompt("Deseja continuar?")
    if (resposta == "s") {
    }
} while (resposta == "s")
console.log("_______________________________________________")

//Sequência numérica
console.log("3 - Sequência numérica")
let numusuario = prompt("Escolha um número:")
let numero = 1
do { 
    console.log(numero)
    numero++
} while (numero <= numusuario)
console.log("_______________________________________________")

//Contador
console.log("4 - Contador")
let contador2 = 1
while(contador2 <= 31) {
    console.log(contador2) 
    contador2+=2
}
console.log("_______________________________________________")

//Classificação numérica
console.log("5 - Classificação numérica")
let cont = 1
do {
    let n = prompt("Digite um número:")
    if (n > 0) {
        console.log("NÚMERO POSITIVO")
    } else if (n < 0) {
        console.log("NÚMERO NEGATIVO")
    } else {
        console.log("O NÚMERO É ZERO")
    }
    cont++
} while (cont <= 5)
console.log("_______________________________________________")

//Operações
console.log("6 - Operações")
let pergunta 
do {
    pergunta = prompt("Você deseja fazer uma conta?")
    if (pergunta == "s") {
        let n1 = Number(prompt("Digite um número:"))
        let n2 = Number(prompt("DIgite mais um número:"))
        let soma = n1 + n2
        console.log(soma)
    }
} while (pergunta == "s")
console.log("_______________________________________________")

