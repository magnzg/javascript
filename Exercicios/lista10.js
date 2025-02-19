//Filmes favoritos
console.log("1 - Filmes favoritos")
let filmes = ["Ana e Vitória", "De Repente Uma Família", "Milagres do Paraíso"]
console.log(filmes[0])
console.log("ㅤ")

//Criando e acessando um array
console.log("2 - Criando e acessando um array")
let frutas = ["Maça", "Melão", "Melancia", "Morango", "Maracujá"]
console.log(frutas[3])
console.log("ㅤ")

//Adicionando elementos
console.log("3 - Adicionando elementos")
let cores = ["Branco", "Azul", "Vermelho"]
for(let adicionando = 0; adicionando < cores.length; adicionando++) {
    console.log(cores)
}
console.log("Adicionando na lista")
cores.push("Roxo")
console.log(cores)
console.log("ㅤ")

//Removendo elementos
console.log("4 - Removendo elementos")
let num = [1, 2, 3, 4]
for(let i = 0; i < num.length; i++) {
    console.log(num[i])
}
console.log("Removendo elementos")
num.pop()
console.log(num)
console.log("ㅤ")

//Adicionando no início
console.log("5 - Adicionando no início")
let cdd = ["Poá", "Ferraz"]
for(let i = 0; i < cdd.length; i++) {
    console.log(cdd[i])
}
console.log("Adicionando no início")
cdd.unshift("Itaquera")
console.log(cdd)
console.log("ㅤ")

//Removendo do início
console.log("6 - Removendo do início")
let animal = ["Leão", "Lontra", "Urso Polar"]
for(let i = 0; i < animal.length; i++) {
    console.log(animal[i])
}
console.log("Removendo do início")
animal.shift()
console.log(animal)
console.log("ㅤ")

//Verificando o tamanho
console.log("7 - Verificando o tamanho")
let carros = ["Toyota", "Honda", "Chevrolet", "Ford"]
for(let i = 0; i < carros.length; i++) {
    console.log(carros[i])
}
console.log("Verificando o tamanho")
console.log(carros)
console.log("ㅤ")

//Operações combinadas
console.log("8 - Operações combinadas")
let a = []
for(let i = 0; i < a.length; i++) {
    console.log(a[i])
}
console.log("Operações combinadas")
a.push(1, 2, 3)
console.log(a)
a.unshift(4)
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log(a)
console.log("ㅤ")