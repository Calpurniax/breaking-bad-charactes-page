'use strict';
//crear botón de reset
function createReset() {
  if (favCharacters != 0) {
    const btnReset = document.createElement('button');
    btnReset.setAttribute('class', 'js-btn-reset aside__favorite--reset');
    favList.appendChild(btnReset);
    btnReset.innerHTML = 'Reset';
    btnReset.addEventListener('click', handleResetAll);
  } else {
    favList.innerHTML = '';
  }
}
//función manejadora
function handleResetAll() {
  favList.innerHTML = '';
  for (const each of favCharacters) {
    unmarkFavourites(each.char_id);
  }
  favCharacters = [];
  localStorage.setItem('favChar', JSON.stringify(favCharacters));
}
