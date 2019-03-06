const apiUrl = 'https://content.viaplay.se/pc-se/serier/samtliga'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

document.addEventListener('DOMContentLoaded', async () => {
  let data = await(await fetch(proxyUrl + apiUrl)).json();

  console.log(data);
});