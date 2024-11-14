const { Veiculo } = require("./Veiculo");

class Carro extends Veiculo {
    #modelo;
    #cor;

    constructor(ano, marca, modelo, cor) {
        super(ano, marca);
        this.#modelo = modelo;
        this.#cor = cor;
        Object.freeze(this)
    }
    get getModelo() {
        return this.#modelo;
    }
    set setModelo(modelo) {
        this.#modelo = modelo;
    }
    get getCor() {
        return this.#cor;
    }
    set setCor(cor) {
        this.#cor = cor;
    }
    calcularValor() {
        console.log(`Valor estimado do carro: R$ ${(2024 - this.getAno) * 10000}`);
    }
    getInfo() {
        console.log( `Marca: ${this.getMarca}, Ano: ${this.getAno}, Cor: ${this.getCor}, Modelo: ${this.getModelo}`);
    }
}

module.exports = {Carro};