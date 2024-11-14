const { Animal } = require("./Animal");

class Ave extends Animal {
    #tipoBico;
    #capacidadeVoo;

    constructor (nome, idade, tipoBico, capacidadeVoo) {
        super(nome, idade);
        this.#tipoBico = tipoBico;
        this.#capacidadeVoo = capacidadeVoo;
        Object.freeze(this);
    }
    get getTipoBico() {
        return this.#tipoBico;
    }
    set setTipoBico(bico) {
        this.#tipoBico = bico;
    }
    get getCapacidadeVoo() {
        return this.#capacidadeVoo;
    }
    set setCapacidadeVoo(voo) {
        this.#capacidadeVoo = voo;
    }
    emitirSom() {
        console.log("A ave canta ou pia.");
    }
    get getInfo() {
        console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de bico: ${this.getTipoBico}, Capacidade de voo: ${this.getCapacidadeVoo}`);
    }
}

module.exports = {Ave};