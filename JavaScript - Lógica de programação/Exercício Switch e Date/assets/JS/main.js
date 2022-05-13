// Forma maior e mais trabalhosa usando switch (Não utilizar)

// const titulo = document.querySelector('.container h1');
// const data = new Date();


// function inserirDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {

//         case 0:
//             diaSemanaTexto = 'domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'sábado';
//             return diaSemanaTexto;
//         default:
//             return diaSemanaTexto;
//         }
// }

// function inserirNomeMes(numeroMes) {
//     let nomeMes;

//     switch (numeroMes) {

//         case 0:
//             nomeMes = 'janeiro';
//             return nomeMes;

//         case 1:
//             nomeMes = 'fevereiro';
//             return nomeMes;
        
//         case 2:
//             nomeMes = 'março';
//             return nomeMes;
        
//         case 3:
//             nomeMes = 'abril';
//             return nomeMes;
        
//         case 4:
//             nomeMes = 'maio';
//             return nomeMes;

//         case 5:
//             nomeMes = 'junho';
//             return nomeMes;
        
//         case 6:
//             nomeMes = 'julho';
//             return nomeMes;
        
//         case 7:
//             nomeMes = 'agosto';
//             return nomeMes;
        

//         case 8:
//             nomeMes = 'setembro';
//             return nomeMes;

//         case 9:
//             nomeMes = 'outubro';
//             return nomeMes;
        
//         case 10:
//             nomeMes = 'novembro';
//             return nomeMes;
        
//         case 11:
//             nomeMes = 'dezembro';
//             return nomeMes;
        
//     }


    // Usando Array

    // function inserirDiaSemanaTexto(diaSemana) {
    //     const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    //     return diasSemana[diaSemana];
    
    // }
    
    // function inserirNomeMes(numeroMes) {
    //     const meses = ['janeiro', 'fevereiro', 'março','abril', 'maio', 'junho', 'julho', 
    //     'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    //     return meses[numeroMes];
    // }
    // }

    
    
// titulo.innerHTML = formarData(data);

// Maneira mais simplificada

const titulo = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

titulo.innerHTML = data.toLocaleString('pt-BR', opcoes);

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formarData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = inserirDiaSemanaTexto(data.getDay());
    const nomeMes = inserirNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
     ` de ${data.getFullYear()} ` + 
     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
}
// Ainda mais simplificada

// const titulo = document.querySelector('.container h1');
// const data = new Date();
// titulo.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short' });
