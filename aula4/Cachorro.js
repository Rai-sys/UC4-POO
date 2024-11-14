const {Animal} = require('./Animal');

class Cachorro extends Animal {  // extends => palavra reservada para construir as relações de herança    -    Subclasse
    #raca

    constructor(nome, raca) {
        super(nome)  // acionando o método construtor da minha classe pai
        this.#raca = raca;
    }
    emitirSom() {    // novo comportamento do cachorro
        console.log(`Meu nome ${this.getNome}, sou da raça ${this.#raca} e emito o som au au!`)
    }
}

module.exports = {Cachorro}
