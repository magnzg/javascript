//Jogo Pedra, Papel e Tesoura
//Variáveis para armanezar os pontos
let placarJogador = 0
let placarPC = 0

//Variável para armazenar as rodadas
let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

//laço de repetição que fará as rodadas
for (let i = 0; i < rodadas; i++) {

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
        placarJogador++
    } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
        alert("Você venceu!")
        placarJogador++
    } else if (escolhaJogador == "papel" && escolhaPC == "pedra") {
        alert("Você venceu!")
        placarJogador++
    } else {
        alert("Você perdeu:(")
        placarPC++
    }
  
}

  //Exibe o placar no console
  console.log("Plcar Jogador:" , placarJogador)
  console.log("Placar Computador:" , placarPC)

  //Placar final
  alert(`Fim de Jogo! Placar final: jogador ${placarJogador} X ${placarPC} Computador`)