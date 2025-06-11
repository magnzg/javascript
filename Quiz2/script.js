// Cada pergunta tem:
// - A pergunta
// - as opções
// - a alternativa certa (começa no 0)
const perguntas = [
  {
    pergunta: "Qual é a principal função dos ribossomos nas células?",
    opcoes: [
      "Produzir energia",
      "Fazer a digestão celular",
      "Realizar fotossíntese",
      "Sintetizar proteínas"
    ],
    correta: 3
  },
  {
    pergunta: "O que é biodiversidade?",
    opcoes: [
      "Conjunto de animais silvestres",
      "Variedade de seres vivos em um ecossistema",
      "Quantidade de oxigênio em uma floresta",
      "Riqueza mineral de um ambiente"
    ],
    correta: 1
  },
  {
    pergunta: "Qual gás é fundamental para a respiração celular?",
    opcoes: [
      "Gás carbônico",
      "Oxigênio",
      "Hidrogênio",
      "Nitrogênio"
    ],
    correta: 1
  },
  {
    pergunta: "O que ocorre na fotossíntese?",
    opcoes: [
      "Liberação de gás carbônico pelas plantas",
      "Transformação de luz solar em energia química",
      "Respiração dos animais",
      "Formação do solo"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a fórmula da água?",
    opcoes: [
      "CO₂",
      "O₂",
      "H₂O",
      "CH₄"
    ],
    correta: 2
  },
  {
    pergunta: "Qual estrutura é responsável por bombear sangue no corpo humano?",
    opcoes: [
      "Pulmão",
      "Cérebro",
      "Coração",
      "Fígado"
    ],
    correta: 2
  },
  {
    pergunta: "O que causa as estações do ano?",
    opcoes: [
      "Movimento de rotação da Terra",
      "Inclinação do eixo da Terra durante a translação",
      "Distância da Lua em relação à Terra",
      "Variações no campo magnético terrestre"
    ],
    correta: 1
  },
  {
    pergunta: "Qual o estado físico da matéria que tem forma e volume definidos?",
    opcoes: [
      "Gasoso",
      "Líquido",
      "Plasma",
      "Sólido"
    ],
    correta: 3
  },
  {
    pergunta: "Qual é a unidade básica da vida?",
    opcoes: [
      "Célula",
      "Átomo",
      "Mitocôndria",
      "Tecido"
    ],
    correta: 0
  },
  {
    pergunta: "O que são seres autótrofos?",
    opcoes: [
      "Seres que se alimentam de outros seres",
      "Seres que não respiram",
      "Seres que produzem seu próprio alimento",
      "Seres que vivem no escuro"
    ],
    correta: 2
  }
]

// variáveis para controlar o quiz
let perguntaAtual = 0 // Qual pergunta está sendo mostrada
let pontuacao = 0 // Quantidade dos acertos
let erros = 0 // Quantidade dos erros
let opcaoSelecionada = null // Qual opção o usuário selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

// função que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

// função que mostra a pergunta atual
function mostrarPergunta() {
    // Pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual]
    // Mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" // limpa as opções anteriores
    // Cria um botão para cada opção de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () => selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true // desabilita o botão de próxima
}

// Para quando o usuário escolher uma opção
function selecionarOpcao(indice) {
    opcaoSelecionada = indice

    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false // habilita o botão de próxima
}

function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}

// Função para ir para a próxima pergunta
botaoProxima.addEventListener("click", () => {
    // Verifica se a resposta está correta
    if (opcaoSelecionada == perguntas[perguntaAtual].correta) {
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})

// Botão para reiniciar o quiz
botaoReiniciar.addEventListener("click", () => {
    // Reseta todas as variáveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    // O quiz aparece e a pontuação final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})

// Inicia o quiz com a primeira pergunta
mostrarPergunta()