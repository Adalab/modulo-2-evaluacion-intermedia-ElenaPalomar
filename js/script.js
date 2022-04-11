'use strick';

//Declarar las variables

const button = document.querySelector('.js_play');
const select = document.querySelector('.js_selected');
const change = document.querySelector('.js_result');
const money = document.querySelector('.js_money'); //
const gambling = document.querySelector('.js_gambling'); //




// Funciones

function getRandomNumber(max) {

  return Math.ceil(Math.random() * max);

}


function win() {

  const betMoney = parseInt(gambling.value);
  const actualMoney = parseInt(money.innerHTML);

  const winMoney = actualMoney + betMoney*2;

  money.innerHTML = winMoney;

} 

function miss() {

  const betMoney = parseInt(gambling.value);
  const actualMoney = parseInt(money.innerHTML);

  const loseMoney = actualMoney - betMoney;

  money.innerHTML = loseMoney;

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

/* function gameOver() {

  if (winMoney > 200) {
    

  }

}
 */ // iba a imprimir un párrafo despues del saldo que diga, ya no puedes apostar más tanto si es meyor que 200 como si es menos que 0 y le iba a decir en ese caso (en cualquiera de los dos) me hicera un removeEventListener. Pero puede que sea mejor hacerlo con poner y quitar clases a los botones que es lo que conocemos


// Declarar la función manejadora

function handleClickButton(event) {

  event.preventDefault();

  compareValues();

}





// Declarar el evento 'click' en el button

button.addEventListener('click', handleClickButton);