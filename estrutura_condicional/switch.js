let opcao = 2
switch (opcao) { //O que vai usar para comparar
    case 1: //comparações
        console.log("Você escolheu a opcao 1")
        break
    case 2:
        console.log("Você escolheu a opcao 2")
        break // interrompre a execução, igual }
    default: // else
        console.log("Opção Invalida")
} 

// switch case = comparações ==
// if else = sesrve pra tudo = < >

let letra = "A"
switch(letra) {
    case "A":
        console.log("Vogal")
        break
    case "B":
        console.log("Consoante")
        break
    case "C":
        console.log("Consoante")
        break
    default:
        console.log("Não é uma letra")
}