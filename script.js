fetch("https://api.dictionaryapi.dev/api/v2/entries/en/link")
  .then(function(response) {
      console.log(response)
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
    // document.getElementById('display-data').innerText = jsonData.meanings;
  })
const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const userWord = document.getElementById('userWord');
let buttonElement = document.getElementById('submit');
// Grab the area where the results will be displayed
let resultsElement = document.getElementById('results');


function displayDefinition(meanings) {
    // Clear previous results
    resultsElement.innerHTML = '';
    let meaningsElement = document.createElement('p');

   meaningsElement.innerText = meanings;

    resultsElement.appendChild(meaningsElement);
}
function fetchMeanings() {
    let url = baseURL+userWord.value;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        displayDefinition(jsonData[0]["meanings"][0]["definitions"][0]["definition"]);
        
    });
}

buttonElement.addEventListener("click", fetchMeanings);