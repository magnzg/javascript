console.log("atv.1---------------------------------------------")
let paragrafo = document.getElementById("paragrafo")
let botaoParagrafo = document.getElementById("botaoParagrafo")

botaoParagrafo.addEventListener("click", function () {
    paragrafo.style.color = "#8da9ff"
})

console.log("atv.2---------------------------------------------")
let mudaCor = document.getElementById("mudaCor")
mudaCor.addEventListener("click", function () {
    mudaCor.style.backgroundColor = "#8da9ff"
})

console.log("atv.3---------------------------------------------")
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function () {
    duplo.style.fontSize = "20px"
})

console.log("atv.4---------------------------------------------")
let passe= document.getElementById("passe")
passe.addEventListener("mouseover", function () {
    passe.innerText = "O mouse esta aqui"
    passe.style.backgroundColor = "#8da9ff"
})
passe.addEventListener("mouseout", function () {
    passe.innerText = "Passe o mouse aqui"
    passe.style.backgroundColor = "white"
})

console.log("atv.5---------------------------------------------")
let jinx1 = document.getElementById("jinx1")
let imgjinx = document.getElementById("imgjinx")

jinx1.addEventListener("click", function () {
    imgjinx.style.height = "200px"
    imgjinx.style.width = "200px"
})

console.log("atv.6---------------------------------------------")
let jinx2= document.getElementById("jinx2")
let imgjinx2= document.getElementById("imgjinx2")

jinx2.addEventListener("click", function () {
    imgjinx2.style.height = "200px"
    imgjinx2.style.width = "200px"
    imgjinx2.style.borderRadius = "100%"
})

console.log("atv.7---------------------------------------------")
let parag1= document.getElementById("parag1")
let botaoParag1= document.getElementById("botaoParag1")

botaoParag1.addEventListener("click", function () {
    parag1.style.backgroundColor = "#8da9ff"
    parag1.style.color = "white"
})

let parag2 = document.getElementById("parag2")
let botaoParag2 = document.getElementById("botaoParag2")

botaoParag2.addEventListener("click", function () {
    parag2.style.backgroundColor = "#8da9ff"
    parag2.style.color = "white"
    parag2.style.fontSize = "20px"
})

let parag3 = document.getElementById("parag3")
let botaoParag3 = document.getElementById("botaoParag3")

botaoParag3.addEventListener("click", function () {
    parag3.style.backgroundColor = "#8da9ff"
    parag3.style.color = "white"
    parag3.style.fontSize = "20px"
    parag3.style.borderRadius = "20px"  
})