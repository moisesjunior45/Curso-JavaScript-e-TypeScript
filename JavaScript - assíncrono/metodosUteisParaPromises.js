// Promise.all | Promise.race | Promise.resolve | Promise.reject

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));


const promises = [
    esperaAi(1000, rand(1, 5)),
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];

/*Promise all - Recebe um array de promises como entrada (um iterável).
Em seguida, ela é resolvida quando todas as promises são resolvidas
ou quando qualquer uma delas é rejeitada.*/
Promise.all(promises)
    .then(function (valor) {
        // console.log(valor);
    })
    .catch(function (erro) {
        // console.log(erro);
    });

/*Promise race - Retorna uma Promise que é estabelecida da mesma forma que a primeira promise passada estabelecer.
Ela resolve ou rejeita, o que acontecer primeiro. */
Promise.race(promises)
    .then(function (valor) {
        // console.log(valor);
    })
    .catch(function (erro) {
        // console.log(erro);
    });