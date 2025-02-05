//Jogo Pedra, Papel e Tesoura
const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:") 
// Solicita que o usuário informe qual ele quer

// var e let pode mudar o valor, const n pode
// let é mais moderno

const escolhaPC = ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)]
// Gera uma escolha aleatória para o computador
// Criamos um array com as opções e usamos o random para escolher uma de forma aleatória

alert(`Você escolheu ${escolhaJogador}`)
alert(`O computador escolheu ${escolhaPC}`)
// Mostrando qual foi a nossa escolha e qual foi a escolha do computador

// Compara se a nossa escolha foi igual a do computador
if (escolhaJogador == escolhaPC) {
    alert("Empate")
} else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") { //criamos a primeira verificação de vitoria
    alert("Você venceu!")
} else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
    alert("Você venceu!")
} else if (escolhaJogador == "papel" && escolhaPC == "pedra"){
    alert("Você venceu!")
} else {
    alert("Você perdeu:(")
}