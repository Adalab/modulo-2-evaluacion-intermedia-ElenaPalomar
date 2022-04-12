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



// Functions

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


function renderHtml (containerElement, valueToPaint) {
  containerElement.innerHTML = valueToPaint;
}


function addClass(element) {
  element.classList.add('hidden');
}

function removeClass(element) {
  element.classList.remove('hidden');
}


function renderRandomNumber(randomNumber) {
  renderHtml(winningNumber, randomNumber);

  removeClass(winningResult);
}


function blockGame() {
  removeClass(reset);
  addClass(play);

  addClass(select);
  addClass(gambling);

  addClass(balanceMoney);

  addClass(winningResult);
}

function gameOver() {
  if(actualMoney <= 0) {

    blockGame();
    renderHtml(result, '¡Ups! Ha ganado la IA');

  } else if (actualMoney >= 200) {

    blockGame();
    renderHtml(result, '¡Enhorabuena! Has ganado a la IA');

  }
}


function game(selectedValue, randomNumber, gamblingValue) {

  if (select.value === 'select') { 

    renderHtml(result, '¡No has elegido ningún número!');
    blockGame();

  } else if(gamblingValue > actualMoney) {

    renderHtml(result, 'No puedes apostar más de lo que tienes');
    blockGame();

  }  else if (gamblingValue <= 0 || gambling.value === '' ) { 

    renderHtml(result, '¿Estás de broma? Quien no arriesga no gana');
    blockGame();

  } else {

    compareValues(selectedValue, randomNumber, gamblingValue);

  }

}


function compareValues(selectedValue, randomNumber, gamblingValue) {

  if (selectedValue === randomNumber) {

    renderHtml(result, '¡Genial! Has ganado el doble de lo apostado 😁');
    actualMoney += gamblingValue*2;

  } else {

    renderHtml(result, '¡Ooohh! Has perdido lo apostado 😭');
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

  addClass(reset);
  removeClass(play);

  removeClass(select);
  removeClass(gambling);

  removeClass(balanceMoney);

  select.value = 'select';
  gambling.value = '';

  actualMoney = 50;
  renderHtml(money, actualMoney);

  renderHtml(result, 'Vamos a jugar!');

}



// Listeners events

play.addEventListener('click', handleClickPlayButton);
reset.addEventListener('click', handleClickResetButton);