//Atividade 1
let mudaCor = document.getElementById("mudaCor")

mudaCor.addEventListener("click", function () {
    if (mudaCor.style.backgroundColor == "purple") {
        mudaCor.style.backgroundColor = "brown"
    } else {
        mudaCor.style.backgroundColor = "purple"
    }
})

//Atividade 2
let like = document.getElementById("like")
let local = 0
let adicionarlike = document.getElementById("adicionar")

adicionar.addEventListener("click", function() {
    local++
    like.innerText = local + " Curtidas"
})

//Atividade 3
let mudar = document.getElementById("mudar")
let texto = document.getElementById("texto")
let texto2 = document.getElementById("texto2")
let texto3 = document.getElementById("texto3")
let texto4 = document.getElementById("texto4")
let texto5 = document.getElementById("texto5")

mudar.addEventListener("click", function () {
    texto.innerText = "Eu gosto de JavaScript"  
    texto2.innerText = "Eu gosto de JavaScript"
    texto3.innerText = "Eu gosto de JavaScript"
    texto4.innerText = "Eu gosto de JavaScript"
    texto5.innerText = "Eu gosto de JavaScript"
})

//Atividade 4
let mensagem = document.getElementById("mensagem")
let enviar = document.getElementById("enviar")

enviar.addEventListener("click", function() {
    mensagem.style.color = "white"
    enviar.innerText = "Mensagem enviada"
})

//Atividade 5
let div = document.getElementById("div")
let ajustar = document.getElementById("ajustar")

ajustar.addEventListener("click", function() {
    div.style.display = "flex"
})

//Atividade 6
let arredondar = document.getElementById("redondo")
let modelar = document.getElementById("modelar")
let quadrado = document.getElementById("quadrado")

arredondar.addEventListener("click", function() {
    quadrado.style.borderRadius = "100px"
})
modelar.addEventListener("click", function() {
    quadrado.style.borderRadius = "0px"
})