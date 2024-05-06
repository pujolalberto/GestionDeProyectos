let count = 0;
const counterDisplay = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});
