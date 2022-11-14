'use strict';
//funcion manejadora del evento "click" en la X de los favoritos
function handleCancel(event) {
  handleFavourites(event);
  unmarkFavourites(event.currentTarget.id);
}
//desmarcar como favoritos en el HTML principal
function unmarkFavourites(id) {
  if (document.getElementById(id) != undefined) {
    document.getElementById(id).classList.remove('favourite');
  }
}
//llamar al HTML de la columna de favoritos y crear el evento para quitarlos
function addCancelEvent() {
  if (favCharacters) {
    let favinHtml = document.querySelectorAll('.aside__favourite li');
    for (let each of favinHtml) {
      each.classList.add('aside__favourite__li');
      const divCancel = document.createElement('div');
      const textCancel = document.createTextNode('X');
      divCancel.appendChild(textCancel);
      divCancel.setAttribute('class', 'aside__favourite__li--div');
      let favArticle = document.querySelectorAll(
        '.aside__favourite__li article'
      );
      for (const eachFav of favArticle) {
        eachFav.setAttribute(
          'class',
          'section__list__article aside__favourite__li--article'
        );
        eachFav.appendChild(divCancel);
        divCancel.setAttribute('id', `${eachFav.id}`);
      }
      let btnCancel = document.querySelectorAll('.aside__favourite__li--div');
      for (const each of btnCancel) {
        each.addEventListener('click', handleCancel);
      }
    }
  }
}
