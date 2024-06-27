// Escreva uma função chamada ePaisagem  
// que recebe dois argumentos, largura e altura de uma imagem(number).
// Retorne true se a imagem estiver no modo paisagem

function ePaisagem(width, height) {
    return width >= height;
}
console.log(ePaisagem(1920,1080));

// Código refatorado (melhorado)

const ePaisagem2 = (width, height) => width >= height;
console.log(ePaisagem2(1080,1920));

