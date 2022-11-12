'use strict';
//query selector
const btnSearch = document.querySelector('.js-btn');
const inputSearch = document.querySelector('.js-input');
const list = document.querySelector('.js-list');
const favList = document.querySelector('.js-favourite');
//Array
let dataArray = [];
let searchList = [];
let favourites = [];
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
  liElement.setAttribute('data-id', `${characterData.char_id}`);
  articleElement.setAttribute('class', 'card');
  //imgElement.setAttribute('class', 'card_img');
  //h3Element.setAttribute('class', 'card_title');
  //textElement.setAttribute('class', 'card_description');
  list.appendChild(liElement);
  addEvent();
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
//añadir a favoritos
function handleFavourites(event) {
  event.preventDefault();
  console.log(event.currentTarget);
  const target = event.currentTarget;
  if (target.classList.contains('favourite')) {
    target.classList.remove('favourite');
    const position = searchInArray(target);
    favourites.splice(position, 1);
  } else {
    target.classList.add('favourite');
    favourites.push(target);
  }
  renderAllCharacters(favourites);
}
//añadir el evento de escucha a cada personaje
function addEvent() {
  const characters = document.querySelectorAll('.card');
  for (const eachCharacter of characters) {
    eachCharacter.addEventListener('click', handleFavourites);
  }
}
//buscar un elemento en el array
function searchInArray(target) {
  const index = favourites.indexOf(target);
  return index;
}
