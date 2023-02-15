'use strict';
//evento para buscar
btnSearch.addEventListener('click', handleSearch);
//filtrar
/*
function handleSearch(event) {
  event.preventDefault();
  const userSearch = inputSearch.value;
  fetch(`https://breakingbadapi.com/api/characters?name=${userSearch}`)
    .then((response) => response.json())
    .then((data) => {
      searchList = data;
      renderAllCharacters(searchList, list);
      addEvent();
      markFavourites();
    });
}
*/
function handleSearch(event) {
  event.preventDefault();
  const userSearch = inputSearch.value;
  filterCharacters = allCharacters.filter(
    (character) => character.status === userSearch
  );
  list.innerHTML = '';
  renderAllCharacters(filterCharacters, list);
  addEvent();
  markFavourites();
  textParagraph.innerHTML = `Hay ${filterCharacters.length} resultados de su búsqueda`;
}

textParagraph.addEventListener('click', handleClickConsole);

function handleClickConsole(event) {
  event.preventDefault();
  for (const each of [20, 35, 50, 90]) {
    if (filterCharacters.length < each) {
      console.log(
        `el número de resultados es ${filterCharacters.length} y es menor que ${each} `
      );
    } else
      console.log(
        `el número de resultados es ${filterCharacters.length} y es mayor que ${each} `
      );
  }
}
