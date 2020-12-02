const searchInput = document.getElementById("search_input");
const searchBtn = document.getElementById("btnSearch");
const searchResultDiv = document.getElementById("search_result");
let url = new URL("/jobs", "http://localhost:3000");

function getInputValue() {
  let inputValue = searchInput.value;
  return inputValue;
}

function clearContainer() {
  searchResultDiv.textContent = "";
}

function createSearchElement() {
  let searchValue = getInputValue();
  let paramsString = `q= ${searchValue}`;
  url.search = new URLSearchParams(paramsString);
  fetch(url)
    .then((result) => result.json())
    .then((response) => {
      for (let i = 0; i < response.length; i++) {
        let job = response[i].suggestion;
        const jobElement = document.createElement("p");
        jobElement.setAttribute("class", "job-title");
        jobElement.textContent = job;
        searchResultDiv.appendChild(jobElement);
      }
    })
    .catch((err) => {
      const msg = document.createElement("p");
      msg.textContent = err.message;
      searchResultDiv.appendChild(msg);
    });
}
function msgError() {
  if (searchInput.length === 0) {
    const errMsg = document.createElement("p");
    errMsg.textContent = "cannot be empty!";
    searchResultDiv.appendChild(errMsg);
  } else {
    createSearchElement();
  }
}

searchBtn.addEventListener("click", () => {
  clearContainer();
  msgError();
});
