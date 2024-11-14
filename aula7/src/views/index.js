const prompt = require('prompt-sync')();
const {controllerVeiculo} = require('../controller/controllerVeiculo');
const controller = new controllerVeiculo();

function iniciarSistema() {
    let opcao;
    do{
        console.log("=== Sistema de Gerenciamento de Veículos ===");
        console.log("1. Adicionar Veículo.");
        console.log("2. Listar Veículos.");
        console.log("3. Editar veículo.")
        console.log("4. Excluir veículo.")
        console.log("0. Sair.")
        opcao = prompt("Escolha uma opção (0 a 4): ");
        switch(opcao) {
            case "0":
                console.log("Saindo do sistema...");
                break;
            case "1":
                adicionarVeiculo();
                break;
            case "2":
                controller.listarVeiculos();
                break;
            case "3":
                editarVeiculo();
                break;
            case "4":
                excluirVeiculo();
                break;
            default:
                console.log("Opção inválida!");
        }
    } while (opcao!== "3");
}

function adicionarVeiculo() {
    const tipo = prompt("Digite o tipo de veículo (Carro/Moto): ");
    const ano = parseInt(prompt("Digite o ano do veículo: "));
    const marca = prompt("Digite a marca do veículo: ");
    const cor = prompt("Digite a cor do veículo: ");
    const modelo = prompt("Digite o modelo do veículo: ");
    controller.criarVeiculo(tipo, ano, marca, cor, modelo)
}

function editarVeiculo() {
    const indice = parseInt(prompt("Digite o indice que você deseja editar: "));
    const result = controller.buscarId(indice);
    if (result) {
        console.log("Informe os novos dados (pressione Enter para manter o valor atual): ");
        const ano = prompt("Novo ano: ");
        const marca = prompt("Nova marca: ");
        const cor = prompt("Nova cor: ");
        const modelo = prompt("Novo modelo: ");
        const novosDados = {};
        if (ano) novosDados.ano = ano;
        if (marca) novosDados.marca = marca;
        if (cor) novosDados.cor = cor;
        if (modelo) novosDados.modelo = modelo;
        controller.editarVeiculo(indice, novosDados);
    } else {
        console.log("Informe um indice válido!");
    }
}

iniciarSistema();