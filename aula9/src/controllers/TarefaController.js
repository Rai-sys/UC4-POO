const {databaseTarefa} = require('../config/databaseTarefa');
const {Tarefa} = require('../models/Tarefa');
const {TarefasPessoais} = require('../models/TarefasPessoais');
const {TarefasProfissionais} = require('../models/TarefasProfissionais');

class TarefaController {
    adicionarTarefa(tipo, descricao, status, prioridade, data) {
        // try {
        //     const novaTarefa = new TarefasPessoais (descricao, status, prioridade, data);
        //     databaseTarefa.push(novaTarefa);
        //     console.log('Tarefa adicionada com sucesso!');
        //     return novaTarefa;
        // } catch (error) {
        //     console.log('Erro ao criar tarefa: ', error.message)
        // }
        let tarefa;
        if (tipo.toLowerCase() === 'pessoal') {
            tarefa = new TarefasPessoais (descricao, status, prioridade, data);
        }
        else if (tipo.toLowerCase() === 'profissional') {
            tarefa = new TarefasProfissionais (descricao, status, prioridade, data);
        }
        else {
            tarefa = new Tarefa(descricao, status, prioridade, data);
            console.log('Tipo de tarefa inválido! Criando como tarefa genérica.');
            return;
        }
        databaseTarefa.push(tarefa);
        console.log('Tarefa adicionada com sucesso! :)');
    }
    listarTarefa() {
        // try {
        //     const dadosTarefa = databaseTarefa.map (tarefa => ({
        //         descricao: tarefa.getDescricao,
        //         status: tarefa.getStatus,
        //         prioridade: tarefa.getPrioridade,
        //         data: tarefa.getData
        //     }));
        //     console.table(dadosTarefa);
        // } catch (error) {
        //     console.log("Nenhuma tarefa adicionada.");
        // }
        if (databaseTarefa.length > 0) {
            console.log('==== Tarefas Registradas ====');
            databaseTarefa.forEach((tarefa, index) => {
                console.log(`${index + 1}`);
                tarefa.getInfo();
            })
        }
        else {
            console.log('Nenhuma tarefa foi registrada! :(');
        }
    }
    // listarTarefaPessoal() {
    //     try{
    //         const dadosTarefaPessoal = databaseTarefa.map (tarefaPessoal => ({
                
    //     }));
    // } catch (error) {

    // }
    // }
    buscarTarefa(indice) {
        if (databaseTarefa.length >= indice -1) {
            return true;
        }
        return false;
    }
    editarTarefa(indice, novosDados) {
        const novaTarefa = databaseTarefa[indice -1];
        if (novosDados.descricao) {
            novaTarefa.getDescricao = novosDados.descricao;
        }
        if (novosDados.status) {
            novaTarefa.getStatus = novosDados.status;
        }
        if (novosDados.prioridade) {
            novaTarefa.getPrioridade = novosDados.prioridade;
        }
        if (novosDados.data) {
            novaTarefa.getData = novosDados.data;
        }
        console.log("Tarefa editada com sucesso!");
        novaTarefa.getInfo();
        databaseTarefa[indice -1] = novaTarefa;
    }
    excluirTarefa(indice) {
            if (!this.buscarTarefa(indice)) {
                console.log('Índice inválido.');
                return;
            }
    
            databaseTarefa.splice(indice - 1, 1);
            console.log('Tarefa excluída com sucesso!');
        }
    }

module.exports = {TarefaController};