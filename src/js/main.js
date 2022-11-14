'use strict';
//evento para buscar
btnSearch.addEventListener('click', handleClick);
//añadir el evento de escucha a cada personaje, para marcarlo como favorito
function addEvent() {
  const characters = document.querySelectorAll('.section__list__article');
  for (const eachCharacter of characters) {
    eachCharacter.addEventListener('click', handleFavourites);
  }
}
//añadir a favoritos
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
//marcar los que ya están en favoritos
function markFavourites() {
  for (const character of favCharacters) {
    let favID = character.char_id;
    if (favID) {
      const characterCard = document.getElementById(favID);
      characterCard.classList.add('favourite');
    }
  }
}
//llamar al HTML de la columna de favoritos
function selectorFavinHtml() {
  if (favCharacters) {
    let favinHtml = document.querySelectorAll('.aside__favourite li');
    for (let each of favinHtml) {
      each.classList.add('aside__favourite__li');
      const divCancel = document.createElement('div');
      const textCancel = document.createTextNode('X');
      divCancel.appendChild(textCancel);
      divCancel.setAttribute('class', 'aside__favourite__li--div');
      let favLi = document.querySelectorAll('.aside__favourite__li article');
      for (const eachFav of favLi) {
        eachFav.appendChild(divCancel);
      }
    }
  }
}
