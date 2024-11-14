class Animal {    // Superclasse
    #nome;
    // #idade;
    // #corPelo;

    constructor(nome,) {
        this.#nome = nome;
        // this.#idade = idade;
        // this.#corPelo = pelo;
    }
    emitirSom() {    // Método
        console.log(`${this.#nome} emite um som.`)
    }
    get getNome() {
        return this.#nome
    }
    set setNome(nome) {
        this.#nome = nome;
    }
    emitirSom() {
        console.log(`${this.getNome} faz au au!`);
    }
    // get getIdade() {
    //     return this.#idade
    // }
    // set setIdade(idade) {
    //     this.#idade = idade;
    // }
    // get getCorPelo() {
    //     return this.#corPelo
    // }
    // set setCorPelo(corPelo) {
    //     this.#corPelo = corPelo;
    // }

}

module.exports = {Animal};