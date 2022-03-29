'use strick';

//Declarar las variables

const button = document.querySelector('.js_button');
const select = document.querySelector('.js_select');
const change = document.querySelector('.js_change');
const money = document.querySelector('.js_money'); //
const gambling = document.querySelector('.js_gambling'); //




// Declarar las funciones con una acción

function getRandomNumber(max) {

  return Math.ceil(Math.random() * max);

}


function win() {

  const betMoney = parseInt(gambling.value);
  const actualMoney = parseInt(money.innerHTML);

  const winMoney = actualMoney + betMoney*2;

  money.innerHTML = winMoney;
  console.log(winMoney);

  return winMoney;

} 
function miss() {

  const betMoney = parseInt(gambling.value);
  const actualMoney = parseInt(money.innerHTML);
  
  const loseMoney = actualMoney - betMoney;

  money.innerHTML = loseMoney;
  console.log(loseMoney);

  return loseMoney;

} 




function compareValues() {

  const numSelected = parseInt(select.value);
  
  const numAleat = getRandomNumber(6);
  if (numSelected === numAleat) {

    change.innerHTML = 'Has ganado el doble de lo apostado 😁';
    win();

  } else {

    change.innerHTML = 'Has perdido lo apostado😭';
    miss();
  }

}




// Declarar la función manejadora

function handleClickButton(event) {

  event.preventDefault();

  compareValues();

}





// Declarar el evento 'click' en el button

button.addEventListener('click', handleClickButton);