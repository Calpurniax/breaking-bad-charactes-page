'use strict';
//fetch
// fetch('https://breakingbadapi.com/api/characters')
//   .then((response) => response.json())
//   .then((data) => {
//     allCharacters = data;
//     renderAllCharacters(allCharacters, list);
//     addEvent();
//     if (localStorage.getItem('favChar')) {
//       favCharacters = JSON.parse(localStorage.getItem('favChar'));
//       renderAllCharacters(favCharacters, favList);
//       markFavourites();
//     }
//   });

fetch('../assets/data/data.json')
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data;
    renderAllCharacters(allCharacters, list);
    addEvent();
    if (localStorage.getItem('favChar')) {
      favCharacters = JSON.parse(localStorage.getItem('favChar'));
      renderAllCharacters(favCharacters, favList);
      markFavourites();
    }
  });
