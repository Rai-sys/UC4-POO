const { Cliente } = require("./Cliente");

class ClientePF extends Cliente {
    #cpf;

    constructor(nome, dataNascimento, telefone, email, cpf) {
        super(nome, dataNascimento, telefone, email);
        this.#cpf = cpf;
    }
    get getCPF() {
        return this.#cpf;
    }
    set setCpf(novoCpf) {
        this.#cpf = novoCpf;
    }
}

module.exports = {ClientePF};