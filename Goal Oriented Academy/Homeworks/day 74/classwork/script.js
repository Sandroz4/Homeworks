let counter = 0;
const addBtn = document.getElementById('addBtn');
const counterDisplay = document.getElementById('counter');

const incrementCounter = () => {
  counter++;
  counterDisplay.textContent = `Count: ${counter}`;
  if (counter === 10) {
      addBtn.removeEventListener('click', incrementCounter);
  }
};

addBtn.addEventListener('click', incrementCounter);
