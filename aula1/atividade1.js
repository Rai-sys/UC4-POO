class Jogos{
    constructor(titulo, genero, anoLancamento) {
        this.titulo = titulo;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
    }
    getTitulo() {
        return this.titulo;
    }
    getGenero() {
        return this.genero;
    }
    getAnoLancamento() {
        return this.anoLancamento;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setAnoLancamento(anoLancamento) {
        this.anoLancamento = anoLancamento;
    }
    exibirDados() {
        console.log(
            `
            Jogos \n
            Titulo: ${this.titulo},
            Genero: ${this.genero},
            Ano de lançamento: ${this.anoLancamento},
            `
        )
    }
}

let jogo01 = new Jogos("League of Legends", "MOBA", "27 de Outubro de 2009");
let jogo02 = new Jogos("Stardew Valley", "RPG, Indie, Simulação", "26 de fevereiro de 2016");
let jogo03 = new Jogos("Baldur's Gate III", "RPG, Aventura, Estratégia", "3 de agosto de 2023");
jogo01.exibirDados();
jogo02.exibirDados();
jogo03.exibirDados();