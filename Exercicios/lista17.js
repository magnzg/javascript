class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    mostrarDetalhes() {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Quantidade de páginas: ${this.paginas}`)
    }
}

const livro = new Livro("Harry Potter e a Pedra Filosofal", "JK.Rowling", 368)
livro.mostrarDetalhes();

class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }
    sacar(valor){
        this.sacar -= valor
    }
    verSaldo(){
        console.log(`A ${this.titular} tem ${this.saldo}`)
    }
}
const conta = new ContaBancaria("Maria", 1000)
conta.verSaldo()
conta.depositar(555)
conta.verSaldo()
conta.sacar(110)
conta.verSaldo()

class Pet {
    constructor(nome, especie, idade) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }
    falar(fala) {
        console.log(`${this.especie} faz ${fala}`)
    }
}
const pet = new Pet ("Merliah", "Gato", 16)
pet.falar("Miau!")

class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo
        this.genero = genero
        this.duracao = duracao
    }

    assistir() {
        console.log(`Você está assistindo ${this.titulo}, que dura ${this.duracao} minutos.`)
    }
}

const filme = new Filme("Harry Potter e a Pedra Filosofal", "Infantil/Fantasia", "2h 32m")
filme.assistir();

class Musica {
    constructor(titulo, artista, tempo) {
        this.titulo = titulo
        this.artista = artista
        this.tempo = tempo
    }

    tocar() {
        console.log(`Tocando ${this.titulo} de ${this.artista}`)
    }
}

const musica = new Musica("Ma Meilleure Ennemie", "League of Legends, Pomme e Stromae", "2:28")
musica.tocar();
