const fetch = require('node-fetch');

const searchInput = document.getElementById("search_input");
const searchBtn = document.getElementById("btnSearch");
const searchResultDiv = document.getElementById("search_result");
const url = "/search";



function getInputValue() {
  let inputValue = searchInput.value;
  return inputValue;
}

function clearContainer() {
  searchResultDiv.textContent = "";
}

function createSearchElement() {
    let searchValue = getInputValue();
    fetch(url)
    .then()
}

function msgError () {
    if(searchInput.length === 0){
        const errMsg = document.createElement('p');
        errMsg.textContent = 'cannot be empty!';
        searchResultDiv.appendChild(errMsg)
    }
    else{
        createSearchElement();
    }
}

searchBtn.addEventListener("click", () => {
    clearContainer();
    msgError ();
});

searchInput.addEventListener("keypress", () => {
    clearContainer();
    msgError ();
});
