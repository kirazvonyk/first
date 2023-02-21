let counter = 0;

const counterText = document.getElementById('counter-text');
const plusButton = document.getElementById('button-plus');

plusButton.addEventListener('click', () => {
  counter++;
  counterText.innerText = counter;
});
const minusButton = document.getElementById('button-minus');
minusButton.addEventListener('click', () => {
  counter--;
  counterText.innerText = counter;
});
