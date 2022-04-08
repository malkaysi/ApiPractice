const img = document.querySelector('img');
const btn = document.getElementById('catButton');
const search = document.getElementById('searchText');

// Playihg around with APIs

let searchInput;

const getCatPicture = () => {

  // Store the value of the search input
  searchInput = search.value;
  let giphySearch;

  // If the user does not search, then default to cats
  if(!searchInput) {
    giphySearch = 'cats';
  } else {
    giphySearch = searchInput;
  }

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API}&s=${giphySearch}`, { mode: 'cors' })
  .then(function (response) {
    return response.json()
  })
  .then(function (response) {
    console.log(response.data.images.original.url);
    img.src = response.data.images.original.url
  })
  // Catch an error if there's an issue with the search
  .catch((error) => {
    console.log({ error })
  })
};

getCatPicture();


btn.addEventListener('click', getCatPicture);