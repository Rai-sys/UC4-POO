const {TarefaController} = require('../controllers/TarefaController');
const {TarefasProfissionais} = require('../models/TarefasProfissionais');

const controllerTarefa = new TarefaController();

console.log('== add tarefa ==');
controllerTarefa.adicionarTarefa('matematica', 'sim', 'alta', '11.11.21');
controllerTarefa.adicionarTarefa('aaaa', 'n', 'aaa', '11.11.11');

console.log('== listar tarefa ==');
controllerTarefa.listarTarefa();