'use strict';
//query selector
const btnSearch = document.querySelector('.js-btn');
const inputSearch = document.querySelector('.js-input');
const list = document.querySelector('.js-list');
//const paragraph = document.querySelector('.js-favourite"');
//Array
let dataArray = [];
let searchList = [];
//fetch
fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    dataArray = data;
    console.log(dataArray);
    renderAllCharacters(dataArray);
  });
//bucle para el array de datos
function renderAllCharacters(dataArray) {
  for (const character of dataArray) {
    renderCharacter(character);
  }
}
//función para pintar cada personaje
function renderCharacter(characterData) {
  const liElement = document.createElement('li');
  const imgElement = document.createElement('img');
  const h3Element = document.createElement('h3');
  const h4Element = document.createElement('h4');
  liElement.appendChild(imgElement);
  liElement.appendChild(h3Element);
  liElement.appendChild(h4Element);
  imgElement.setAttribute('src', characterData.img);
  imgElement.setAttribute('alt', `${characterData.name}`);
  const h3Text = document.createTextNode(characterData.name);
  const statusText = document.createTextNode(characterData.status);
  h3Element.appendChild(h3Text);
  h4Element.appendChild(statusText);
  //liElement.setAttribute('class', 'card');
  //imgElement.setAttribute('class', 'card_img');
  //h3Element.setAttribute('class', 'card_title');
  //h4Element.setAttribute('class', 'card_race');
  //textElement.setAttribute('class', 'card_description');
  list.appendChild(liElement);
}
//filtrar
function handleClick(event) {
  event.preventDefault();
  const userSearch = inputSearch.value;
  fetch(`https://breakingbadapi.com/api/characters?name=${userSearch}`)
    .then((response) => response.json())
    .then((data) => {
      searchList = data;
      list.innerHTML = '';
      renderAllCharacters(searchList);
    });
}
btnSearch.addEventListener('click', handleClick);
