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
    buscarNotebook(numeroSerie) {
        try {
            const notebook = databaseNotebook.find(n => n.getNumeroSerie === numeroSerie);
            if (!notebook) {
                console.error('Notebook não encontrado.', numeroSerie);
                return;
            }
            console.log('Notebook encontrado: ');
            console.table([notebook]);
            return notebook;
        } catch (error) {
            console.error('Erro ao buscar notebook:', error.message);
        }
    }
    editarNotebook(numeroSerie, novaMarca, novoModelo, novaCor, novoPreco) {
        try {
            const notebook = this.buscarNotebook(numeroSerie);
            if(notebook) {
                notebook.marca = novaMarca;
                notebook.modelo = novoModelo;
                notebook.cor = novaCor;
                notebook.setPreco = novoPreco;
                return notebook;
            }
        } catch (error) {
            console.error('Erro ao atualizar notebook: ', error.message);
        }
    }
    excluirNotebook(numeroSerie) {
        try {
            const notebook = this.buscarNotebook(numeroSerie);
            if(notebook) {
                const index = databaseNotebook.findIndex(n => n.getNumeroSerie === numeroSerie);
                const notebookRemovido = databaseNotebook.splice(index, 1);
                console.log('Notebook removido com sucesso');
                return notebookRemovido;
            }
        } catch (error) {
            console.error('Erro ao remover notebook.', error.message)
        }
    }
    excluirTodosNotebook() {
        try {
            if(databaseNotebook.length > 0) {
                databaseNotebook.length = 0;
            }
        } catch (error) {
            
        }
    }
}

module.exports = {controllerNotebook};


// const controlando = new controllerNotebook()
// controlando.adicionarNotebook('1230', 'acer', 'aaa', 'cinza', '12,00');
// controlando.listarNotebook();