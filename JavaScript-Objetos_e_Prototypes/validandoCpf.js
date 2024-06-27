// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237
11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

// let cpf = '705.484.450-52';
// let cpfSomenteNumeros = cpf.replace(/\D+/g, '');
// cpfArray = Array.from(cpfSomenteNumeros);
// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));

function validaCpf(cpf) {
    Object.defineProperty(this, 'cpfSomenteNumeros', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
}

validaCpf.prototype.valida = function () {
    if (typeof this.cpfSomenteNumeros === 'undefined') return false;
    if (this.cpfSomenteNumeros.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfSomenteNumeros.slice(0, -2)
    const primeiroDigito = this.criaDigito(cpfParcial);
    const segundoDigito = this.criaDigito(cpfParcial + primeiroDigito);

    const novoCpf = cpfParcial + primeiroDigito + segundoDigito;
    return novoCpf === this.cpfSomenteNumeros;
};

validaCpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let contadorRegrassivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (contadorRegrassivo * Number(val));
        contadorRegrassivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

validaCpf.prototype.isSequencia = function() {
    const sequencia = this.cpfSomenteNumeros[0].repeat(this.cpfSomenteNumeros.length);
    return sequencia === this.cpfSomenteNumeros;
}

const cpf = new validaCpf('070.987.720-03');

if(cpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}