'use strict';
//añadir el evento de escucha a cada personaje, para marcarlo como favorito
function addEvent() {
  const characters = document.querySelectorAll('.section__list__article');
  for (const eachCharacter of characters) {
    if (!eachCharacter.classList.contains('aside__favourite__li--article')) {
      eachCharacter.addEventListener('click', handleFavourites);
    }
  }
}
//añadir o quitar de favoritos
function handleFavourites(event) {
  event.preventDefault();
  const target = event.currentTarget;
  if (searchInArray(parseInt(target.id)) === -1) {
    target.classList.add('favourite');
    favCharacters.push(
      allCharacters.find(
        (eachCharacter) => eachCharacter.char_id === parseInt(target.id)
      )
    );
  } else {
    target.classList.remove('favourite');
    const position = searchInArray(parseInt(target.id));
    favCharacters.splice(position, 1);
  }
  localStorage.setItem('favChar', JSON.stringify(favCharacters));
  renderAllCharacters(favCharacters, favList);
}
//buscar un elemento en el array
function searchInArray(target) {
  return favCharacters.findIndex((each) => each.char_id === target);
}
//marcar en el HTML los que ya están en favoritos
function markFavourites() {
  for (const character of favCharacters) {
    document.getElementById(character.char_id).classList.add('favourite');
  }
}
