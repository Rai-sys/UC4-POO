const {Tarefa} = require('./Tarefa');

class TarefasPessoais extends Tarefa {
    #prioridade;
    #data;

    constructor(prioridade, data) {
        super(descricao, finalizado);
        this.#prioridade = prioridade;
        this.#data = data;
        Object.freeze(this);
    }
    get getPrioridade() {
        return this.#prioridade;
    }
    set setPrioridade(prioridade) {
        this.#prioridade = prioridade;
    }
    get getData() {
        return this.#data;
    }
    set setData(data) {
        this.#data = data;
    }
    getInfo() {
        console.log(`Descrição da atividade: ${this.getDescricao}, Finalizado: ${this.getFinalizado}, Prioridade: ${this.getPrioridade}, Data: ${this.getData}`);
    }
    
}

module.exports = {TarefasPessoais};

// const atv = new Tarefa ('atividade matematica', 'sim', 'adicao', '11.12.24' );
// atv.finalizarTarefa();
// atv.getInfo();