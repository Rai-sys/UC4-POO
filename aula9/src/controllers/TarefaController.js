const {databaseTarefa} = require('../config/databaseTarefa');
const {Tarefa} = require('../models/Tarefa');
const {TarefasProfissionais} = require('../models/TarefasProfissionais');

class TarefaController {
    adicionarTarefa(descricao, finalizado, prioridade, data) {
        try {
            const novaTarefa = new Tarefa (descricao, finalizado, prioridade, data);
            databaseTarefa.push(novaTarefa);
            console.log('Tarefa adicionada com sucesso!');
            return novaTarefa;
        } catch (error) {
            console.log('Erro ao criar tarefa: ', error.message)
        }
    }
    listarTarefa() {
        try {
            const dadosTarefa = databaseTarefa.map (tarefa => ({
                descricao: tarefa.getDescricao,
                finalizado: tarefa.getFinalizado,
                prioridade: tarefa.getPrioridade,
                data: tarefa.getData
            }));
            console.table(dadosTarefa);
        } catch (error) {
            console.error('Erro ao listar tarefa: ', error.message);
        }
    }
}

module.exports = {TarefaController};