const apiUrl = 'https://content.viaplay.se/pc-se/serier/samtliga'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const fetchShows = async () => {
  let data = await(await fetch(proxyUrl + apiUrl)).json();
  return data;
}

document.addEventListener('DOMContentLoaded', async () => {
  let displaySection = document.getElementById('listing')
  fetchShows().then((data) => {
    
  })
});