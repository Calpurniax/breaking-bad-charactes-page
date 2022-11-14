'use strict';
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
    addEvent();
  });
//filtrar
function handleClick(event) {
  event.preventDefault();
  const userSearch = inputSearch.value;
  fetch(`https://breakingbadapi.com/api/characters?name=${userSearch}`)
    .then((response) => response.json())
    .then((data) => {
      searchList = data;
      renderAllCharacters(searchList, list);
      addEvent();
    });
}
