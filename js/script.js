'use strick';

// Variables

const button = document.querySelector('.js_play');
const select = document.querySelector('.js_selected');
const result = document.querySelector('.js_result');
const money = document.querySelector('.js_money'); 
const gambling = document.querySelector('.js_gambling'); 
let actualMoney = 50;



// Functions

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


function renderHtml (containerElement, valueToPaint) {
  containerElement.innerHTML = valueToPaint;
} 


function compareValues(selectedValue, randomNumber) {

  const gamblingValue = parseInt(gambling.value);

  if (selectedValue === randomNumber) {

    renderHtml(result, 'Has ganado el doble de lo apostado 😁');
    actualMoney += gamblingValue*2;

  } else {

    renderHtml(result, 'Has perdido lo apostado 😭');
    actualMoney -= gamblingValue;

  }

  renderHtml(money, actualMoney);

}



/* function gameOver() {

  if (winMoney > 200) {
    

  }

}
 */ // iba a imprimir un párrafo despues del saldo que diga, ya no puedes apostar más tanto si es meyor que 200 como si es menos que 0 y le iba a decir en ese caso (en cualquiera de los dos) me hicera un removeEventListener. Pero puede que sea mejor hacerlo con poner y quitar clases a los botones que es lo que conocemos



// Handle functions

function handleClickPlayButton(event) {

  event.preventDefault();

  const selectedValue = parseInt(select.value);
  const randomNumber = getRandomNumber(6);

  compareValues(selectedValue, randomNumber);

}





// Listeners events

button.addEventListener('click', handleClickPlayButton);