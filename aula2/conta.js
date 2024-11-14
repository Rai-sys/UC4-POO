class conta{
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
        Object.freeze(this)
    }
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}

const c1 = new conta(500);
console.log(c1.getSaldo());
c1.saldo = 5000
console.log(c1.saldo);
