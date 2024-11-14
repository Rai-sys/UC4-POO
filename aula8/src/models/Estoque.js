const {Notebook} = require('./Notebook');

class Estoque {
    quantidade;
    produto;

    constructor (quantidade, produto) {
        this.quantidade = quantidade;
        this.produto = produto;
    }
}

module.exports = {Estoque}