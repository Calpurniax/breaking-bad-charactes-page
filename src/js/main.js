'use strict'
//query selector
const btnSearch = document.querySelector('.js-btn');
const inputSearch = document.querySelector('.js-text');
const list = document.querySelector('.js-list');
const paragraph = document.querySelector('.js-paragraph')
//Array
let listNickname = [];
//fetch
fetch('https://breakingbadapi.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    });
