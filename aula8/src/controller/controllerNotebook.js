const {databaseNotebook} = require('../config/databaseNotebook');
const {Notebook} = require('../models/Notebook');

class controllerNotebook {
    adicionarNotebook(numeroSerie, marca, modelo, cor, preco) {
        try {
            const novoNotebook = new Notebook (numeroSerie, marca, modelo, cor, preco);
            databaseNotebook.push(novoNotebook);
            console.log('Notebook adicionado com sucesso!');
            return novoNotebook;
        } catch (error) {
            console.log('Erro ao criar aluno:', error.message);
        }
    }
    listarNotebook() {
        try {
            const dadosNotebook = databaseNotebook.map (notebook => ({
                numeroSerie: notebook.getNumeroSerie,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                preco: notebook.getPreco
            }));
            console.table(dadosNotebook);
        } catch (error) {
            console.error("Erro ao listar notebook:", error.message);
        }
    }
    editarNotebook() {
        try {
            
        } catch (error) {
            
        }
    }
    excluirNotebook() {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = {controllerNotebook};


// const controlando = new controllerNotebook()
// controlando.adicionarNotebook('1230', 'acer', 'aaa', 'cinza', '12,00');
// controlando.listarNotebook();