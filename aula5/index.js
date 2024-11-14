//const {Conta} = require('./Conta');
const {ContaPoupanca} = require('./ContaPoupanca');

const poupanca01 = new ContaPoupanca("Valtemir", 5);

console.log(poupanca01.getSaldo);
poupanca01.setSaldo = 50;
console.log(poupanca01.getSaldo);

poupanca01.aplicarRendimento();
console.log(poupanca01.getSaldo);