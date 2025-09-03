const { expect } = require('chai');
const { somarDoisNumeros } = require('../src/calculadora');

describe('Testes da função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        // Coleta o resultado da função
        const resultadoSomaDeDoisValores = somarDoisNumeros(5, 3);

        // Compara o resultado com o valor que você espera
        expect(resultadoSomaDeDoisValores).to.equal(8);

    });

    it('A função deve ser capz de somar um número positivo e um negativo', function () {
        // Coleta o resultado da função
        const resultadoSomaDeDoisValores = somarDoisNumeros(50, -15);

        // Compara o resultado com o valor que você espera
        expect(resultadoSomaDeDoisValores).to.equal(35);
    });
});