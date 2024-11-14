const {controllerNotebook} = require('../controller/controllerNotebook');

// instanciando o controller notebook

const notebookController = new controllerNotebook();

// testando o CRUD para notebook

// 1- criando notebooks
console.log('===== Criando Notebook =====');
notebookController.adicionarNotebook('123ABC', 'Dell', 'Inspirion', 'Prata', 4000.00);
notebookController.adicionarNotebook('456ABC', 'Positivo', 'Travando', 'Preto', 2500.00);
// 2- listando os notebooks
console.log('===== Listando Notebook =====');
notebookController.listarNotebook();
// 3- buscando um notebook pelo número de série
console.log('===== Buscando Notebook =====');
notebookController.buscarNotebook('123ABC');
// 4- Atualizando um notebook
console.log('===== Atualizando Notebook =====');
notebookController.adicionarNotebook('123ABC', 'Dell', 'XPS', 'Branco', 4000.00);
// 5- Removendo um notebook
console.log('===== Removendo Notebook =====');
notebookController.excluirNotebook('456ABC');