'use strict';
//bucle para pintar un array
function renderAllCharacters(dataArray, htmlList) {
  htmlList.innerHTML = '';
  for (const character of dataArray) {
    renderCharacter(character, htmlList);
  }
  addCancelEvent();
  if (dataArray === favCharacters) {
    createReset();
  }
}
//función para pintar cada personaje
function renderCharacter(characterData, htmlList) {
  const liElement = document.createElement('li');
  const articleElement = document.createElement('article');
  const imgElement = document.createElement('img');
  const h3Element = document.createElement('h3');
  const h4Element = document.createElement('h4');
  liElement.appendChild(articleElement);
  articleElement.appendChild(imgElement);
  articleElement.appendChild(h3Element);
  articleElement.appendChild(h4Element);
  imgElement.setAttribute('src', characterData.img);
  imgElement.setAttribute('alt', `${characterData.name}`);
  const h3Text = document.createTextNode(characterData.name);
  const statusText = document.createTextNode(characterData.status);
  h3Element.appendChild(h3Text);
  h4Element.appendChild(statusText);
  articleElement.setAttribute('id', `${characterData.char_id}`);
  articleElement.setAttribute('class', 'section__list__article');
  imgElement.setAttribute('class', 'section__list__article--img');
  htmlList.appendChild(liElement);
}
