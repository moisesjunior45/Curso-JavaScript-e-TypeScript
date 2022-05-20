const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    console.log(p);
    p.style.background = backgroundColorBody;
    p.style.color = '#fff';
}