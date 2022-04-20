'use strict';

const accesBtn = document.querySelector('.js-access-btn');
const errSpan = document.querySelector('.js-span');
const form = document.querySelector('.js-form');
const getInput = document.querySelector('.js-input');

function clickedBtn() {
  const email = getInput.value;
  let emailOk = email.indexOf('@');
  if (emailOk < 1 && errSpan.classList.contains('display-err')) {
    errSpan.classList.add('display-err');
    errSpan.classList.remove('display-err');
  } else {
    errSpan.classList.add('display-err');
  }
}

accesBtn.addEventListener('click', clickedBtn);

function handleSubmit(ev) {
  ev.preventDefault();
  const email = getInput.value;
  let emailOk = email.indexOf('@');
  if (emailOk < 1) {
    alert('Please introduce a valid email');
  } else {
    alert('Early access successfully confirmed.');
  }
  getInput.value = '';
}

form.addEventListener('submit', handleSubmit);
