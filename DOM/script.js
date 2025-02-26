let titulo = document.getElementById("titulo")
//documento = HTML
// getElemntByID = pegue o elemento pelo id
//logo, quando fizemos isso guardamos o que estava no HTML em uma variável no JS
console.log(titulo.innerText)

//---------------------------------------

let texto = document.getElementById("texto")
texto.innerText= "Texto Alterado"
// dessse jeito trocamos p texto de uma tag
texto.style.color = "Blue"
//usando o style podemos mexer no css


let botao = document.getElementById("botao")
//quando clica acontece alguma coisa
botao.addEventListener("click", function(){
    alert("botão clicado")
})
//---------------------------------------
let duplo = document.getElementById('duplo')
duplo.addEventListener("dblclick", function() {
    duplo.style.backgroundColor = "red"
})
//Só acontece quando clica duas vezes

//---------------------------------------
let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function() {
    passe.innerText="o mouse está aqui"
    passe.style.backgroundColor="yellow"
})
passe.addEventListener("mouseout", function(){
    passe.innerText=("passe o mouse aqui")
    passse.style.backgroundColor="blue"
    passe.style.fontSize="16px"
}) //o mouse é quando o mouse está fora elemento