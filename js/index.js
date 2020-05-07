const URL = "https://rickandmortyapi.com/api/character/";

async function getCharacters() {
  const characters = await fetch(URL)
    .then(response => response.json())
  return characters.results;
}

const cardsElement = document.querySelector("#cards");

function createCharacterCard(card) {
  const div = document.createElement("div");
  div.style.width = "18rem";
  div.style.margin = "1rem";
  div.className = "card";
  div.innerHTML = `
  <img src="${card.image}" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">
      Situação: ${card.status}
    </p>
    <p class="card-text">
      Sexo: ${card.gender}
    </p>
  </div>
  `;
  cardsElement.appendChild(div);
}

function renderCards(cards) {
  cards.map(createCharacterCard);
}

async function main() {
  let data = await getCharacters();
  renderCards(data);
}

main();
