class Notebook {
    #numeroSerie;
    marca;
    modelo;
    cor;
    #preco;

    constructor (numeroSerie, marca, modelo, cor, preco) {
        this.#numeroSerie = numeroSerie;
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.#preco = preco;
    }
    get getNumeroSerie() {
        return this.#numeroSerie;
    }
    set setNumeroSerie(novoNumeroSerie) {
        this.#numeroSerie = novoNumeroSerie;
    }
    get getPreco() {
        return this.#preco;
    }
    set setPreco(novoPreco) {
        this.#preco = novoPreco;
    }
}

module.exports = {Notebook};