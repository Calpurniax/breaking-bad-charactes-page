'use strict';
//query selector
const btnSearch = document.querySelector('.js-btn');
const inputSearch = document.querySelector('.js-input');
const list = document.querySelector('.js-list');
const favList = document.querySelector('.js-favourite');
//Array
let allCharacters = [];
let searchList = [];
let favCharacters = [];
//fetch
fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data;
    renderAllCharacters(allCharacters, list);
    if (localStorage.getItem('favChar')) {
      favCharacters = JSON.parse(localStorage.getItem('favChar'));
      renderAllCharacters(favCharacters, favList);
      markFavourites();
    }
  });

//bucle para pintar un array
function renderAllCharacters(dataArray, htmlList) {
  htmlList.innerHTML = '';
  for (const character of dataArray) {
    renderCharacter(character, htmlList);
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
  //h3Element.setAttribute('class', 'card_title');
  //textElement.setAttribute('class', 'card_description');
  htmlList.appendChild(liElement);
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
      renderAllCharacters(searchList, list);
    });
}
btnSearch.addEventListener('click', handleClick);
//añadir a favoritos
function handleFavourites(event) {
  event.preventDefault();
  console.log(event.currentTarget);
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
  console.log(favCharacters);
  localStorage.setItem('favChar', JSON.stringify(favCharacters));
  renderAllCharacters(favCharacters, favList);
}
//añadir el evento de escucha a cada personaje
function addEvent() {
  const characters = document.querySelectorAll('.section__list__article');
  for (const eachCharacter of characters) {
    eachCharacter.addEventListener('click', handleFavourites);
  }
}
//buscar un elemento en el array
function searchInArray(target) {
  return favCharacters.findIndex((each) => each.char_id === target);
}
//marcar los que ya están en favoritos
function markFavourites() {
  for (const character of favCharacters) {
    let favID = character.char_id;
    let allID = allCharacters.find(
      (eachCharacter) => eachCharacter.char_id === favID
    );
    if (allID) {
      const characterCard = document.getElementById(allID.char_id);
      characterCard.classList.add('favourite');
    } else {
      console.log('no es igual');
    }
  }
}
