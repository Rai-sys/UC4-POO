class Tarefa {
    #descricao;
    #finalizado;

    constructor(descricao, finalizado) {
        this.#descricao = descricao;
        this.#finalizado = finalizado;
    }
    get getDescricao() {
        return this.#descricao;
    }
    set setDescricao(descricao) {
        this.#descricao = descricao;
    }
    get getFinalizado() {
        return this.#finalizado;
    }
    getInfo() {
        console.log(`Descrição da atividade: ${this.getDescricao}, Finalizado: ${this.getFinalizado}, Prioriade: ${this.getPrioridade}, Data: ${this.getData}`);
    }
    finalizarTarefa() {
        if (this.#finalizado === 'sim') {
            console.log("finalizado");
        }else {
            console.log('vai estudar');
        }   
    }
}

module.exports = { Tarefa };

// const atv = new Tarefa ('atividade matematica', 'sim');
// atv.finalizarTarefa();
// atv.getInfo();
