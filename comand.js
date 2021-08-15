const bottons = document.querySelectorAll('.btn');
const genContainer = document.querySelector('.content-wrapper');

let texBtn = '';

for (let botton of bottons) {
  botton.addEventListener('click', function clickBtn() {
    texBtn = botton.textContent;
    createModalImg();
  })
}

function createModalImg() {
  const bacgroundModalTeg = document.createElement('div');
  const boxImagesTeg = document.createElement('div');
  const imgTeg = document.createElement('img');

  bacgroundModalTeg.classList.add('bacground__box-images');
  boxImagesTeg.classList.add('box-images');
  imgTeg.src = imagesSrc[texBtn];

  bacgroundModalTeg.appendChild(boxImagesTeg);
  boxImagesTeg.appendChild(imgTeg);
  genContainer.appendChild(bacgroundModalTeg);

  bacgroundModalTeg.classList.add('activ-js');

}

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('bacground__box-images')) {
    event.target.querySelector('.box-images').classList.add('anim-down');
    setTimeout(removeModal, 500);

    function removeModal() {
      event.target.remove();
    }
  }
})

const imagesSrc = {
  cart: "img/basket.png",
  fire: "img/campfire.png",
  confetti: "img/confetti.png",
  paper: "img/paper-crafts.png"
}

