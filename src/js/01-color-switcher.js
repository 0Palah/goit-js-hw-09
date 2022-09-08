const btnStartEl = document.querySelector('button[data-start]');
const btnStotEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btnStartEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(bodyEl);
