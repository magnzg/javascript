console.log("Atividade 1 --------------------")
function Resultado() {
    let num = document.getElementById("num").value
    let resultado1 = document.getElementById("resultado1")
    let resultado2 = document.getElementById("resultado2")
    let resultado3 = document.getElementById("resultado3")

    resultado1.innerText = "Resultado 1: " + Math.round(num)
    resultado2.innerText = "Resultado 2: " + Math.floor(num)
    resultado3.innerText = "Resultado 3: " + Math.ceil(num)
}

console.log("Atividade 2 --------------------")
function nomeMaiMin() {
    let nome = document.getElementById("nome").value
    let nome1 = document.getElementById("nome1")
    let nome2 = document.getElementById("nome2")

    nome1.innerText = "Maiúsculo: " + nome.toUpperCase()
    nome2.innerText = "Minúsculo: " + nome.toLowerCase()
}

console.log("Atividade 3 --------------------")
console.log(parseInt(Math.random()*100))

console.log("Atividade 4 --------------------")
function decimal() {
    let decimais = document.getElementById("decimais").value
    let result = document.getElementById("result")

    result.innerText = Number(decimais).toFixed(2)
}

console.log("Atividade 5 --------------------")
function mudarPalavra() {
    let frase = document.getElementById("frase").value
    let palavra = document.getElementById("palavra").value
    let troca = document.getElementById("troca").value
    let novo = document.getElementById("novo")

    novo.innerText = frase.replace(palavra, troca)
}


console.log("Atividade 6 --------------------")
function VDDouFalso() {
    let numer = document.getElementById("numer").value
    let resultado = document.getElementById("resultado")

    if (isNaN(numer)){
        resultado.innerText = "É um texto"
    } else {
        resultado.innerText = "É um número"
    }
    // resultado.innerText = isNaN(numer)
}

console.log("Atividade 7 --------------------")
function localizarNum() {
    let texto = document.getElementById("texto").value
    let localizacao = document.getElementById("localizacao").value
    let letra = document.getElementById("letra")

    letra.innerText = texto.charAt(localizacao)
}

console.log("Atividade 8 --------------------")
function juntar() {
    let Nome = document.getElementById("Nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let nomeCompleto = document.getElementById("nomeCompleto")

    nomeCompleto.innerText = Nome + " " + sobrenome
}
console.log("Atividade 9 --------------------")
function soma() {
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let somar = document.getElementById("somar")

    somar.innerText = numero1 + numero2
}
console.log("Atividade 10 --------------------")
function idade() {
    let idd = parseInt(document.getElementById("idd").value)
    let dirigir = document.getElementById("dirigir")
    
        if (idd >= 18){
           dirigir.innerText = "Pode dirigir"
        } else {
           dirigir.innerText = "Não pode dirigir"
        }
}