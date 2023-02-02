'use strict';

// selecting elements

const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');

const weightVal = document.getElementById('weight-value');

const heightVal = document.getElementById('height-value');

const bmiEl = document.getElementById('bmi-value');

const msgEl = document.getElementById('message');

// global variables
let weight = 0;
let height = 0;

let bmiValue = 0;

// functions

const calculate = () => {
  // console.log(weightEl.value);
  // console.log(heightEl.value);
  weightVal.textContent = weightEl.value + 'kg';

  heightVal.textContent = heightEl.value + 'cm';

  weight = weightEl.value;
  height = heightEl.value;
  bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(1);

  // display bmi value;

  bmiEl.innerHTML = bmiValue;

  // condition for message

  if (bmiValue < 18.5) {
    console.log(`hiii`);
    msgEl.innerText = 'under weight';
    msgEl.style.color = 'red';
  } else if (bmiValue > 18.5 && bmiValue < 24.9) {
    msgEl.innerText = 'normal';
    msgEl.style.color = 'green';
  } else if (bmiValue > 25 && bmiValue < 29.9) {
    msgEl.innerText = 'over weight';
    msgEl.style.color = 'yellow';
  } else if (bmiValue > 30 && bmiValue < 34.9) {
    msgEl.innerText = 'obesity class 1';
    msgEl.style.color = 'red';
  } else if (bmiValue > 35 && bmiValue < 39.9) {
    msgEl.innerText = 'obesity class 2';
    msgEl.style.color = 'red';
  } else {
    msgEl.innerText = 'extreme obesity';
    msgEl.style.color = 'red';
  }
};
