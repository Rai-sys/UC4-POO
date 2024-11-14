class Cliente {
    nome;
    dataNascimento;
    telefone;
    #email;

    constructor(nome, dataNascimento, telefone, email) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.#email = email;
    }
    get getEmail() {
        return this.#email;
    }
    set setEmail(novoEmail) {
        this.#email = novoEmail;
    }
}

module.exports = {Cliente};