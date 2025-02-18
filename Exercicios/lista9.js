//Contador
console.log("1 - Contador")
for(let contador = 1; contador <= 30; contador++) {
    console.log(contador)
}
console.log("ㅤ")

//Contagem Regressiva
console.log("2 - Contagem Regressiva")
for(let c = 30; c >= 1; c--){
    console.log(c)
}
console.log("ㅤ")

//Classificação
console.log("3 - Classificação")
for (let classificação = 0; classificação < 5; classificação++) {
    let classi = prompt("Digite um número: ");
    if (classi >= 50) {
        console.log("ACIMA DA MÉDIA");
    } else {
        console.log("ABAIXO DA MÉDIA");
    }
}
console.log("ㅤ")

//Tabuada
console.log("4 - Tabuada")
let numero = prompt("Escolha um número:")
for(let mult = 1; mult <= 10 ; mult++){
    let resultado = mult * numero
    console.log(numero, "X", mult, "=", resultado) 
}
console.log("ㅤ")

//Canção
console.log("5 - Canção")
for (let patos = prompt("Escolha um número de patos:"); patos > 0; patos--) {
    console.log(patos, "patinhos foram passear, além das montanhas para brincar, a mamãe gritou: Quá, quá, quá, quá")
    console.log("Mas só", patos-1, "patinhos voltaram de lá. :(")
}
console.log("ㅤ")

//Classificação de Idades
console.log("6 - Classificação de Idades")
for(let contador2 = 1; contador2 <= 10; contador2++){
    let num2 = prompt("Insira 10 idades diferentes:")
    if (num2 >= 18){
        console.log("VOCÊ É MAIOR DE IDADE")
    }else{
        console.log("VOCÊ É MENOR DE IDADE")
    }
}
console.log("ㅤ")

//Eleição
console.log("7 - Eleição")
for(let contador3 = 1; contador3 <= 5; contador3++){
    let num3 = prompt("Vote em um candidato, sendo '1,2,3,4' para voto para os respectivos candidatos, '5' para voto nulo e '6' para voto em branco.")
    if (num3 == 1){
        console.log("Candidato 1")
    }else if (num3 == 2){
        console.log("Candidato 2")
    }else if (num3 == 3){
        console.log("Candidato 3")
    }else if (num3 == 4){
        console.log("Candidato 4")
    }else if (num3 == 5){
        console.log("Nulo")
    }else {
        console.log("Voto em branco")
    }
}
console.log("ㅤ")