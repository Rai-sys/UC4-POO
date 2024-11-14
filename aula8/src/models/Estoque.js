const {Notebook} = require('../models/Notebook');

class Estoque {
    quantidade;
    produto;
    #id;

    constructor (id, quantidade, produto) {
        try{
            if(produto instanceof Notebook) {
                this.#id = id;
                this.quantidade = quantidade;
                this.produto = produto;
            }
        } catch (error) {
            console.log('Não é permitido criar estoque')
        }
    }
    get getId() {
        return this.#id;
    }
    set setId(novoId) {
        this.#id = novoId;
    }
}

module.exports = {Estoque}