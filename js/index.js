const URL = "https://rickandmortyapi.com/api/character/";

async function getCharacters() {
  const characters = await fetch(URL)
    .then(response => response.json())
  console.log(characters.results);
}

getCharacters();
