const bottons = document.querySelectorAll('.btn');
const modal = document.querySelector('.bacground__box-images');

for (let botton of bottons) {
  botton.addEventListener('click', clickBtn)
}

function clickBtn() {
  modal.classList.add('activ-js');
}

modal.addEventListener('click', cloceModal);

function cloceModal() {
  modal.classList.remove('activ-js');
}