const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
let bodyEl = document.querySelector('body');
let chengeColorId = null;
btnStopEl.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStartEl.addEventListener('click', () => {
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
  bodyEl.style.backgroundColor = getRandomHexColor();
  chengeColorId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStopEl.addEventListener('click', () => {
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
  clearInterval(chengeColorId);
});

console.log(bodyEl);
