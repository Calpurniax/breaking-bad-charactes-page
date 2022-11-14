"use strict";const btnSearch=document.querySelector(".js-btn"),inputSearch=document.querySelector(".js-input"),list=document.querySelector(".js-list"),favList=document.querySelector(".js-favourite");let allCharacters=[],searchList=[],favCharacters=[];function renderAllCharacters(e,t){t.innerHTML="";for(const a of e)renderCharacter(a,t);addCancelEvent()}function renderCharacter(e,t){const a=document.createElement("li"),r=document.createElement("article"),c=document.createElement("img"),n=document.createElement("h3"),i=document.createElement("h4");a.appendChild(r),r.appendChild(c),r.appendChild(n),r.appendChild(i),c.setAttribute("src",e.img),c.setAttribute("alt",""+e.name);const s=document.createTextNode(e.name),l=document.createTextNode(e.status);n.appendChild(s),i.appendChild(l),r.setAttribute("id",""+e.char_id),r.setAttribute("class","section__list__article"),c.setAttribute("class","section__list__article--img"),t.appendChild(a)}function handleSearch(e){e.preventDefault();const t=inputSearch.value;fetch("https://breakingbadapi.com/api/characters?name="+t).then(e=>e.json()).then(e=>{searchList=e,renderAllCharacters(searchList,list),addEvent(),markFavourites()})}function addEvent(){const e=document.querySelectorAll(".section__list__article");for(const t of e)t.classList.contains("aside__favourite__li--article")||t.addEventListener("click",handleFavourites)}function handleFavourites(e){e.preventDefault();const t=e.currentTarget;if(-1===searchInArray(parseInt(t.id)))t.classList.add("favourite"),favCharacters.push(allCharacters.find(e=>e.char_id===parseInt(t.id)));else{t.classList.remove("favourite");const e=searchInArray(parseInt(t.id));favCharacters.splice(e,1)}localStorage.setItem("favChar",JSON.stringify(favCharacters)),renderAllCharacters(favCharacters,favList)}function searchInArray(e){return favCharacters.findIndex(t=>t.char_id===e)}function markFavourites(){for(const e of favCharacters)document.getElementById(e.char_id).classList.add("favourite")}function handleCancel(e){handleFavourites(e),unmarkFavourites(e)}function unmarkFavourites(e){document.getElementById(e.currentTarget.id).classList.remove("favourite")}function addCancelEvent(){if(favCharacters){let e=document.querySelectorAll(".aside__favourite li");for(let t of e){t.classList.add("aside__favourite__li");const e=document.createElement("div"),a=document.createTextNode("X");e.appendChild(a),e.setAttribute("class","aside__favourite__li--div");let r=document.querySelectorAll(".aside__favourite__li article");for(const t of r)t.setAttribute("class","section__list__article aside__favourite__li--article"),t.appendChild(e),e.setAttribute("id",""+t.id);let c=document.querySelectorAll(".aside__favourite__li--div");for(const e of c)e.addEventListener("click",handleCancel)}}}fetch("https://breakingbadapi.com/api/characters").then(e=>e.json()).then(e=>{allCharacters=e,renderAllCharacters(allCharacters,list),addEvent(),localStorage.getItem("favChar")&&(favCharacters=JSON.parse(localStorage.getItem("favChar")),renderAllCharacters(favCharacters,favList),markFavourites())}),btnSearch.addEventListener("click",handleSearch);