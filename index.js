const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

const INTERVAL = 1000;
let intervalId = null;
let currentColor = "";

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomOriginalColorGenerator = () => {
  let newColor = "";
  do {
    newColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    console.log('newcolor', newColor)
  } while (currentColor === newColor);

  currentColor = newColor;
}


const setBackgroundColor = () => {
  randomOriginalColorGenerator()
  body.style.backgroundColor = currentColor;
  console.log('current color', currentColor);
}

const onStartBtnPress = () => {
  intervalId = setInterval(() => {
  setBackgroundColor()
},
    INTERVAL)
  
  startBtn.disabled = true;
}

const onStopBtnPress = () => {
  clearInterval(intervalId);

  startBtn.disabled = false;
}

startBtn.addEventListener('click', onStartBtnPress);
stopBtn.addEventListener('click', onStopBtnPress);
