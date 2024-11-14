const { Animal } = require("./Animal");

class Mamifero extends Animal {
    #tipoPelo;
    #habitat;

    constructor(nome, idade, tipoPelo, habitat) {
        super(nome, idade);
        this.#tipoPelo = tipoPelo;
        this.#habitat = habitat;
        Object.freeze(this);
    }
    get getTipoPelo() {
        return this.#tipoPelo;
    }
    set setTipoPelo(pelo) {
        this.#tipoPelo = pelo;
    }
    get getHabitat() {
        return this.#habitat;
    }
    set setHabitat(habitat) {
        this.#habitat = habitat;
    }
    emitirSom() {
        console.log("O mamífero urge ou grunhe");
    }
    get getInfo() {
        console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo do pelo: ${this.getTipoPelo}, Habitat: ${this.getHabitat}`);
    }
}

module.exports = {Mamifero};