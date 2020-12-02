const searchInput = document.getElementById("search_input");
const searchBtn = document.getElementById("btnSearch");
const searchResultDiv = document.getElementById("search_result");

function createSearchElement() {
  const searchValue = searchInput.value.trim();
  const paramsString = `/jobs?q=${searchValue}`;
  if (searchValue.length === 0) {
    const errMsg = document.createElement("p");
    errMsg.textContent = "cannot be empty!";
    searchResultDiv.appendChild(errMsg);
  }else{
    fetch(paramsString)
    .then((result) => result.json())
    .then((response) => {
      if (response.error) {
        throw new Error(response["error"]["message"]);
      } else {
        for (let i = 0; i < response.length; i++) {
          let job = response[i].suggestion;
          const jobElement = document.createElement("p");
          jobElement.setAttribute("class", "job-title");
          jobElement.textContent = job;
          searchResultDiv.appendChild(jobElement);
        }
      }
    })
    .catch((err) => {
      const msg = document.createElement("p");
      msg.textContent = err.message;
      searchResultDiv.appendChild(msg);
    });
  }
  
}


searchBtn.addEventListener("click", () => {
  searchResultDiv.textContent = "";
  createSearchElement();
});
