const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;



for (let p of ps) {
  console.log(p);
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF'
};