'use strick';

// Variables

const play = document.querySelector('.js_play');
const select = document.querySelector('.js_selected');
const result = document.querySelector('.js_result');
const money = document.querySelector('.js_money'); 
const gambling = document.querySelector('.js_gambling'); 
let actualMoney = 50;
const reset = document.querySelector('.js_reset');
const balanceMoney = document.querySelector('.js_balanceMoney');
const winningNumber = document.querySelector('.js_winningNumber');
const winningResult = document.querySelector('.js_winningResult');
const returnButton = document.querySelector('.js_return');
const subtitle = document.querySelector('.js_subtitle');



// Functions

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


function renderHtml (containerElement, valueToPaint) {
  containerElement.innerHTML = valueToPaint;
}


function addClassHidden(element) {
  element.classList.add('hidden');
}

function removeClassHidden(element) {
  element.classList.remove('hidden');
}


function addClassWrong() {
  result.classList.add('results--wrong');
}

function removeClassWrong() {
  result.classList.remove('results--wrong');
}


function renderRandomNumber(randomNumber) {
  renderHtml(winningNumber, randomNumber);

  removeClassHidden(winningResult);
}


function outGame() {
  addClassHidden(subtitle);

  removeClassHidden(returnButton);
  addClassHidden(play);

  addClassHidden(select);
  addClassHidden(gambling);

  addClassHidden(balanceMoney);

  addClassHidden(winningResult);
}


function blockGame() {
  removeClassHidden(reset);
  addClassHidden(play);

  addClassHidden(select);
  addClassHidden(gambling);

  addClassHidden(balanceMoney);

  addClassHidden(winningResult);
}

function gameOver() {
  if(actualMoney <= 0) {

    blockGame();
    renderHtml(result, '¡Ups! Ha ganado la IA');
    addClassWrong();

  } else if (actualMoney >= 200) {

    blockGame();
    renderHtml(result, '¡Enhorabuena! Has ganado a la IA');
    removeClassWrong();

  }
}


function game(selectedValue, randomNumber, gamblingValue) {

  if (select.value === 'select') { 

    renderHtml(result, '¡No has elegido ningún número!');
    addClassWrong();
    outGame();

  } else if(gamblingValue > actualMoney) {

    renderHtml(result, 'No puedes apostar más de lo que tienes');
    addClassWrong();
    outGame();

  }  else if (gamblingValue <= 0 || gambling.value === '' ) { 

    renderHtml(result, '¿Estás de broma? Quien no arriesga no gana');
    addClassWrong();
    outGame();

  } else {

    compareValues(selectedValue, randomNumber, gamblingValue);

  }

}


function compareValues(selectedValue, randomNumber, gamblingValue) {

  if (selectedValue === randomNumber) {

    renderHtml(result, '¡Genial! Has ganado el doble de lo apostado 😁');
    removeClassWrong();
    actualMoney += gamblingValue*2;

  } else {

    renderHtml(result, '¡Ooohh! Has perdido lo apostado 😭');
    addClassWrong();
    actualMoney -= gamblingValue;

  }

  renderHtml(money, actualMoney);

  gameOver();

}



// Handle functions

function handleClickPlayButton(event) {

  event.preventDefault();

  const selectedValue = parseInt(select.value);

  const randomNumber = getRandomNumber(6);
  renderRandomNumber(randomNumber)

  const gamblingValue = parseInt(gambling.value);

  game(selectedValue, randomNumber, gamblingValue);

}


function handleClickResetButton(event) {

  event.preventDefault();

  addClassHidden(reset);
  removeClassHidden(play);

  removeClassHidden(select);
  removeClassHidden(gambling);

  removeClassHidden(balanceMoney);

  removeClassWrong();

  select.value = 'select';
  gambling.value = '';

  actualMoney = 50;
  renderHtml(money, actualMoney);

  renderHtml(result, 'Vamos a jugar!');

}


function handleClickReturnButton(event) {

  event.preventDefault();

  addClassHidden(returnButton);
  removeClassHidden(play);

  removeClassHidden(select);
  removeClassHidden(gambling);

  removeClassHidden(balanceMoney);

  removeClassWrong();

  renderHtml(result, 'Vamos a jugar!');

}



// Listeners events

play.addEventListener('click', handleClickPlayButton);
reset.addEventListener('click', handleClickResetButton);
returnButton.addEventListener('click', handleClickReturnButton);