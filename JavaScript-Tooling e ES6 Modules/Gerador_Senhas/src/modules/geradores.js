const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumeros = () => String.fromCharCode(rand(48, 58));
const simbolos = '!@#$%^&*';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maisculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd)

    for (let i = 0; i < qtd; i++) {
        maisculas && senhaArray.push(geraMaiscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumeros());
        simbolos && senhaArray.push(geraSimbolo());
    }

     senhaArray.sort(() => 0.5 - Math.random());
    return senhaArray.join('').slice(0, qtd);
}

