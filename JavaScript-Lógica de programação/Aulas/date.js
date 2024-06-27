//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
/* const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia);   // 01/01/1970 Timestamp unix ou época unix */
// const data = new Date(2019, 3, 20); // A, M, D, H, m, s, ms
/* const data = new Date('2022-02-22 18:20:58');
console.log('Dia', data.getDate());   
console.log('Mês', data.getMonth() + 1);   // Mês começa do 0
console.log('Ano', data.getFullYear());   
console.log('Hora', data.getHours());   
console.log('Min', data.getMinutes());   
console.log('Seg', data.getSeconds());   
console.log('ms', data.getMilliseconds());   
console.log('Dia semana', data.getDay());  // 0 - Domingo, 6 - Sábado
console.log(data.toString()); */
// console.log(Date.now());


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatarData() {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil)