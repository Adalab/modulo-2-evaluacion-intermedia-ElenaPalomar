'use strick';

//Declarar las variables

const button = document.querySelector('.js_button');
const select = document.querySelector('.js_select');
const change = document.querySelector('.js_change');





// Declarar las funciones con una acción

function getRandomNumber(max) {

  return Math.ceil(Math.random() * max);

}







function compareValues() {

  const numSelected = parseInt(select.value);
  console.log(numSelected);
  
  const numAleat = getRandomNumber(6);
  console.log(getRandomNumber(6));

  if (numSelected === numAleat) {

    change.innerHTML = 'Has ganado el doble de lo apostado 😁';

  } else {

    change.innerHTML = 'Has perdido lo apostado😭';
  }

}




// Declarar la función manejadora

function handleClickButton(event) {

  event.preventDefault();

  compareValues();

}





// Declarar el evento 'click' en el button

button.addEventListener('click', handleClickButton);