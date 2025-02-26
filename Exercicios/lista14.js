//Mudar a cor de um botão
console.log("1 - Mudar a cor de um botão")
let botao = document.getElementById("botão") 
botao.addEventListener("click", function() { 
    if(botao.style.backgroundColor == "red") { 
        botao.style.backgroundColor = "blue" 
    } else { 
        botao.style.backgroundColor = "red" 
    } 
}) 
console.log("ㅤ")