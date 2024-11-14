const {Animal} = require('./Animal');
const {Mamifero} = require('./Mamifero');
const {Ave} = require('./Ave');

let animal01 = new Animal('Gato', '7');
animal01.emitirSom();
animal01.getInfo;


let m01 = new Mamifero("Cachorro", "5","marrom", "casa")
m01.emitirSom();
m01.getInfo;

let a01 = new Ave('Passarinho', '1 ano', 'pequeno', 'boa capacidade');
a01.emitirSom();
a01.getInfo;