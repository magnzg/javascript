function aparece() {
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none") {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

function mudarCor() {
    texto.style.color = "white"
    document.body.style.backgroundColor = "black"
}

function completarTexto() {
    let texto1 = document.getElementById("texto1")
    texto1.innerText = "Meu nome é Maria, tenho 17 anos, moro em Poa, estudo no SENAI e faço o curso de Desenvolvimento de Sistemas."
}

function trocarCores() {
    let cor = document.getElementById("cor")
    if (cor.style.color == "green") {
        cor.style.color = "yellow"
    } else if (cor.style.color == "yellow"){
        cor.style.color = "blue"
    } else {
        cor.style.color = "green"
    }
}

function clicar() {
    alert("Pare de clicar no botão!")
}

let carro = document.getElementById("carro")
carro.style.display = "none"
let caixa = document.getElementById("caixa")
caixa.style.display = "none"
let tesouro = document.getElementById("tesouro")
tesouro.style.display = "none"
function alerta1() {
    alert("Você ganhou um carro!")
    carro.style.display = "block"
}
function alerta2() {
    alert("Você não ganhou nada!")
    caixa.style.display = "block"
}
function alerta3() {
    alert("Parabéns, você encontrou o tesouro!")
    tesouro.style.display = "block"
}

function imagem() {
    let tamanho = document.getElementById("imagem")
    let novoTamanho = Math.floor(Math.random() * (300 - 20 + 1)) + 10
    tamanho.style.width = novoTamanho + "px"
}

let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
div1.style.backgroundColor = "red"
function semaforo() {
    if (div1.style.backgroundColor == "red") {
        div1.style.backgroundColor = "black"
        div2.style.backgroundColor = "yellow"
        div3.style.backgroundColor = "black"
        alert("PARE!")
    } else if (div2.style.backgroundColor == "yellow") {
        div1.style.backgroundColor = "black"
        div2.style.backgroundColor = "black"
        div3.style.backgroundColor = "green"
        alert("ATENÇÃO!")
    } else {
        div1.style.backgroundColor = "red"
        div2.style.backgroundColor = "black"
        div3.style.backgroundColor = "black"
        alert("PODE IR!")
    }
}

let comedia = document.getElementById("comedia")
let acao = document.getElementById("acao")
let romance = document.getElementById("romance")

function troca() {
    comedia.src = "comedia1.jpg"
}
function destroca() {
    comedia.src = "comedia.png"
}

function troca2() {
    acao.src = "acao1.jpeg"
}
function destroca2() {
    acao.src = "acao.png"
}

function troca3() {
    romance.src = "romance1.jpg"
}
function destroca3() {
    romance.src = "romance.png"
}