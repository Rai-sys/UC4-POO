// como iniciar
class Pessoa{
    // nome;      // <--- atributo
    // rg;
    // cpf;
    // idade;
    // sexo;
    // nacionalidade;
    // estadoCivil;
    constructor(nome, rg, cpf, idade, sexo, nacionalidade, estadoCivil){    // <--- método para criação de objeto
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.estadoCivil = estadoCivil;
    }
    getNome() {            // <---  metodos para acessar atributos  /  manipula objeto
        return this.nome;
    }
    getRg() {
        return this.rg;
    }
    getCpf() {
        return this.cpf;
    }
    getIdade() {
        return this.idade;
    }
    getSexo() {
        return this.sexo;
    }
    getNacionalidade() {
        return this.nacionalidade;
    }
    getEstadoCivil() {
        return this.estadoCivil;
    }
    setNome(nome) {          //  <---    altera   /   manipula objeto
        this.nome = nome;
    }
    exibirDados() {
        console.log(
            `
            Dados Pessoais \n
            Nome: ${this.nome}, 
            RG: ${this.rg},
            CPF: ${this.cpf},
            Idade: ${this.idade},
            Sexo: ${this.sexo},
            Nacionalidade: ${this.nacionalidade},
            Estado Civil: ${this.estadoCivil}  
            `
        )
    }
}

let pessoa01 = new Pessoa("Joel", 11111, 12345678910, 18, "Indefinido", "Nordestino", "Sei lá");
console.table(pessoa01.getIdade());
pessoa01.setNome("Joelma");
console.log(pessoa01.getNome());
pessoa01.exibirDados();
