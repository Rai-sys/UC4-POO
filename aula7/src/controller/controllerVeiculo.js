const {Veiculo} = require('../models/Veiculo');
const {Carro} = require('../models/Carro');
const {Moto} = require('../models/Moto');

const bancoVeiculos = [];


class controllerVeiculo {
    
    criarVeiculo(tipo, ano, marca, cor, modelo) {
        let veiculo;
        if (tipo.toLowerCase() === 'carro') {
            veiculo = new Carro(ano, marca, modelo, cor);
        }
        else if (tipo.toLowerCase() === 'moto') {
            veiculo = new Moto(ano, marca, modelo, cor);
        }
        else if (tipo.toLowerCase() === 'veiculo') {
            veiculo = new Veiculo(ano, marca);
        }
        else {
            console.log('Tipo de Veiculo inválido')
            return;
        }
        bancoVeiculos.push(veiculo);
        console.log('Veículo cadastrado com sucesso!');
    }
    listarVeiculos() {
        if (bancoVeiculos.length > 0) {
            console.log('==== Veículos Registrados ====');
            bancoVeiculos.forEach((veiculo, index) => {
                console.log(`${index + 1}`);
                veiculo.getInfo();
                veiculo.calcularValor();
            })
        } else {
            console.log('Nenhum veículo registrado!');
        }
    }
    buscarId(indice) {
        if (bancoVeiculos.length >= indice -1) {
            return true;
        }
        return false;
    }
    editarVeiculo(indice, novosDados) {
            const novoVeiculo = bancoVeiculos[indice-1];
            if (novosDados.ano) {
                novoVeiculo.setAno = novosDados.ano;
            }
            if (novosDados.marca) {
                novoVeiculo.setMarca = novosDados.marca;
            }
            if (novosDados.cor) {
                novoVeiculo.setCor = novosDados.cor;
            }
            if (novosDados.modelo) {
                novoVeiculo.setModelo = novosDados.modelo;
            }
            console.log("Veículo atualizado com sucesso. Novos dados: ")
            novoVeiculo.getInfo();
            bancoVeiculos[indice-1] = novoVeiculo;

        }
    }

module.exports = {controllerVeiculo};