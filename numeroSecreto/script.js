let numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let maxTentativas = 10
let historico = []

function verificarPalpite() {
  const palpite = Number(document.getElementById("palpite").value)
  const mensagem = document.getElementById("mensagem")
  const tentativasEl = document.getElementById("tentativas")
  const cesta = document.getElementById("cesta")
  const botao = document.getElementById("botao")
  const input = document.getElementById("palpite")

  if (palpite < 1 || palpite > 100) {
    mensagem.textContent = "Digite um número entre 1 e 100!"
    return
  }

  tentativas++
  historico.push(palpite)
  tentativasEl.textContent = "Tentativas: " + historico.join(", ")

  if (palpite === numeroSecreto) {
    mensagem.textContent = `Parabéns! Acertou com ${tentativas} tentativas.`
    cesta.src = "cestaaberta.png"
    input.disabled = true
    botao.disabled = true
  } else if (tentativas >= maxTentativas) {
    mensagem.textContent = `Acabaram as tentativas! O número era ${numeroSecreto}.`
    input.disabled = true
    botao.disabled = true
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "Mais! O número é maior."
  } else {
    mensagem.textContent = "Menos! O número é menor."
  }

  document.getElementById("palpite").value = ""
  input.focus()
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1
  tentativas = 0
  historico = []

  document.getElementById("palpite").disabled = false
  document.getElementById("botao").disabled = false
  document.getElementById("mensagem").textContent = ""
  document.getElementById("tentativas").textContent = ""
  document.getElementById("palpite").value = ""
  document.getElementById("cesta").src = "cestafechada.png"
}
