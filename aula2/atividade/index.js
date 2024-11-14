const prompt = require('prompt-sync')();
const {Produto} = require('./Produto');
const {Pedido} = require('./Pedido');

function adicionarProdutosAoPedido() {
    const pedido = new Pedido();
    while(true) {
        const nome = prompt("Digite o nome do produto (ou 'sair' para finalizar)");
        if (nome.toLowerCase() === 'sair') break;
        const preco = parseFloat(prompt("Digite o preço do produto: "))
        if (isNaN(preco) || preco <= 0) {
            console.log("Preço inválido. Tente novamento");
            continue;
        }
        const produto = new Produto(nome, preco);
        pedido.adicionarProduto(produto);
        console.log(`Produto "${produto.getNome}" adicionado com sucesso`)
    }
    pedido.mostrarPedido();
}
adicionarProdutosAoPedido();

const produto01 = new produto("Camisa", 60);
const produto02 = new produto("Calça", 70);
const produto03 = new produto("Tênis", 160);

const pedido01 = new pedido();
pedido01.adicionarProduto(produto01);
pedido01.adicionarProduto(produto03);

pedido01.mostrarPedido();