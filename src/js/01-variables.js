'use strict';
//query selector
const btnSearch = document.querySelector('.js-btn');
const inputSearch = document.querySelector('.js-input');
const list = document.querySelector('.js-list');
const favList = document.querySelector('.js-favourite');
const textParagraph = document.querySelector('.js-results-search');
//Array
let allCharacters = [];
let searchList = [];
let favCharacters = [];
let filterCharacters = [];
