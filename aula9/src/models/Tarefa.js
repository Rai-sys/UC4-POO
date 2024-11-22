class Tarefa {
    #descricao;
    #status;

    constructor(descricao, status) {
        this.#descricao = descricao;
        this.#status = status;
    }
    get getDescricao() {
        return this.#descricao;
    }
    set setDescricao(descricao) {
        this.#descricao = descricao;
    }
    get getStatus() {
        return this.#status;
    }
    getInfo() {
        console.table(`Descrição da atividade: ${this.getDescricao}, Status: ${this.getStatus}`);
    }
    finalizarTarefa() {
        if (this.getStatus === 'sim') {
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
