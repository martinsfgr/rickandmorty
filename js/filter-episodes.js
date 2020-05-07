const selectEpisode = document.querySelector("#episode");
const getEpisodeUrl = id => `https://rickandmortyapi.com/api/episode/${id}`;

selectEpisode.addEventListener("change", event =>
  renderByEpisode(event.target.value)
);

function renderByEpisode(value) {
  const episodes = generateEpisodesCharacters(data);
  renderCards(episodes[value]);
}

function getEpisodeId(url) {
  const urlSplited = url.split("/");
  return urlSplited[urlSplited.length - 1];
}

function generateEpisodeList(character) {
  return character.episode.map(url => getEpisodeId(url));
}

function mapCharacterToEpisodes(episodes, character) {
  const characterEpisodes = generateEpisodeList(character);
  let newEpisodes = { ...episodes };
  characterEpisodes.map(episode => {
    if (newEpisodes[episode]) {
      newEpisodes = {
        ...newEpisodes,
        [episode]: [...newEpisodes[episode], character]
      };
      return;
    }

    newEpisodes[episode] = [character];
  });
  return newEpisodes;
}

function generateEpisodesCharacters(characters) {
  return characters.reduce((episodes, character) => {
    return mapCharacterToEpisodes(episodes, character);
  }, {});
}
