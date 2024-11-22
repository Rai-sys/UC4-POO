const prompt = require('prompt-sync')();
const {TarefaController} = require('../controllers/TarefaController');
//const {TarefasPessoais} = require('../models/TarefasPessoais');

const controllerTarefa = new TarefaController();

function iniciarSistema() {
    let opcao;
    do{
        console.log("==== Sistema para Gerenciamento de Tarefas ====");
        console.log("1. Adicionar tarefa.");
        console.log("2. Listar tarefas.");
        console.log("3. Editar tarefas.");
        console.log("4. Excluir tarefa.")
        console.log("5. Sair do sistema.");
        opcao = prompt("Escolha uma opção de 1 a 5: ");
        switch (opcao) {
            case "5":
                console.log("Saindo do sistema. Volte com mais tarefas! :) ");
                break;
            case "1":
                adicionarTarefa();
                break;
            case "2":
                controllerTarefa.listarTarefa();
                break;
            case "3":
                editarTarefa(); 
                break;
            case "4":
                excluirTarefa();
                break;
            default:
                console.log("Opção inválida!");
        }
    } while (opcao!== "3");
}

function adicionarTarefa() {
    const tipo = prompt("Digite qual o tipo da tarefa (Pessoal/Profissional): ");
    const descricao = prompt("Digite a descrição da tarefa: ");
    const status = prompt("Digite o status da tarefa (Finalizado/Não finalizado): ");
    const prioridade = prompt("Digite a prioridade da tarefa (alta/média/baixa): ");
    const data = (prompt("Digite a data da tarefa (dd/mm/aaaa): "));
    controllerTarefa.adicionarTarefa(tipo, descricao, status, prioridade, data);
}

function editarTarefa() {
    const indice = parseInt(prompt("Digite o indice da tarefa que você deseja editar: "));
    const result = controllerTarefa.buscarTarefa(indice);
    if (result) {
        console.log("Informe os novos dados: ");
        const descricao = prompt("Nova descrição: ");
        const status = prompt("Novo status: ");
        const prioridade = prompt("Nova prioridade: ");
        const data = prompt("Nova data: ");
        const novosDados = {};
        if (descricao) novosDados.descricao = descricao;
        if (status) novosDados.status = status;
        if (prioridade) novosDados.prioridade = prioridade;
        if (data) novosDados.data = data;
        controllerTarefa.editarTarefa(indice, novosDados);
    } else {
        console.log("Informe um indice válido!");
    }
}

iniciarSistema();