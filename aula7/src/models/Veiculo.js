class Veiculo {
    #ano;
    #marca;

    constructor(ano, marca) {
        this.#ano = ano;
        this.#marca = marca;
        Object.freeze(this);
    }
    get getAno() {
        return this.#ano;
    }
    set setAno(ano) {
        this.#ano = ano;
    }
    get getMarca() {
        return this.#marca;
    }
    set setMarca(marca) {
        this.#marca = marca;
    }
    getInfo() {
        console.log( `Marca: ${this.getMarca}, Ano: ${this.getAno}`);
    }
    calcularValor() {
        throw new Error('Método CalcularValor deve ser implementado');
    }
}

module.exports = {Veiculo};