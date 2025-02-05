//Dirigir com Carteira
console.log("1 - Dirigir com Carteira")
let idade = prompt("Digite sua idade:")
let carteirademotorista = true
if(idade >=18 && carteirademotorista == true) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
console.log("_______________________________________________")
//Elegível para Promoção
console.log("2 - Elegível para Promoção")
let anosdetrabalho = prompt("Digite seus anos de trabalho:")
let quantidadedeprojetos = prompt("Quantos projetos você realizou:")
if (anosdetrabalho => 5 && quantidadedeprojetos > 10) {
    console.log("Você está elegível para promoção")
} else {
    console.log("Você não está elegível para promoção")
}
console.log("_______________________________________________")
//Entrar em um Evento
console.log("3 - Entrar em um Evento")
let idd = prompt("Digite sua idade:")
if (idd > 18 && idd < 30) {
    console.log("Você pode entrar no evento")
} else {
    console.log("Você não pode entrar no evento")
}
console.log("_______________________________________________")
//Seleção de Funcionário
console.log("4 - Seleção de Funcionário")
let anos = prompt("Digite sua idade:")
let experiencia = true
if (anos > 21 && experiencia == true) {
    console.log("Você foi aceito para a vaga")
} else {
    console.log("Você não foi aceito para a vaga")
}
console.log("_______________________________________________")
//Verificação de Login Avançada
console.log("5 - Verificação de Login Avançada")
let nomeusuario = prompt("Digite seu usuário:")
let senha = prompt("Digite sua senha:")
if (nomeusuario == "admin" && senha == 1234) {
    console.log("Login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}
console.log("_______________________________________________")
//Intervalo de Valores
console.log("6 - Intervalo de Valores")
let n = prompt("Digite um número:")
if (n > 10 && n < 20) {
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if (n > 30 && n < 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("Ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}
console.log("_______________________________________________")
//Valores Extremos
console.log("7 - Valores Extremos")
let num = prompt("Digite um número:")
if (num < 10 || num > 100 && num == 50) {
    console.log("O número é aceito")
} else {
    console.log("O número não é aceito")
}
console.log("_______________________________________________")
