const {Dado} = require("./Dado");
const {Jogador} = require("./Jogador");

class SistemaAzar {
    #dado;
    #jogador;
    constructor(dado, jogador) {
        if (dado instanceof Dado && jogador instanceof Jogador) { // verificar se os parametros sao do mesmo tipo
            this.#dado = dado;
            this.#jogador = jogador;
        } else {
            console.log('Os dados fornecidos não são do tipo Jogador ou Dado');
        }
        Object.freeze(this)  // Bloqueando a criação de novos atributos
    }
    get getDado() {
        return this.#dado;
    }
    set setDado(dado) {
        this.#dado = dado;
    }
    get getJogador() {
        return this.#jogador;
    }
    set setJogador(jogador) {
        this.#jogador = jogador;
    }
    verificarGanhador() {
        if (this.#dado.getFace === this.#jogador.getAposta) {
            console.log(`Parabéns você ganhou! Resultado do SistemaAzar: ${this.#dado.getFace}`);
            this.#jogador.apresentarDados();
        } else {
            console.log(`Que pena! Aposte novamente. Resultado do Sistema: ${this.#dado.getFace}`);
            this.#jogador.apresentarDados();
        }
    }
}

module.exports = {SistemaAzar}