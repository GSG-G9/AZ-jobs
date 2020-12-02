const fetch = require('node-fetch');

function apiCall(url, callBack){
    fetch(url)
    .then((response) => {
        callBack(response)
    })
    .catch((err) => {
        console.log(err);
    })
}
