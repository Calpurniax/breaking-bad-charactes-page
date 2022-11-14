'use strict';
//evento para buscar
btnSearch.addEventListener('click', handleSearch);
//filtrar
function handleSearch(event) {
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
