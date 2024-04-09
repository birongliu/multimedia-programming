const musicInstrumentOnePlayer = document.getElementById("music-one");
const musicInstrumentTwoPlayer = document.getElementById("music-two");
const musicInstrumentThreePlayer = document.getElementById("music-three");
const musicInstrumentFourPlayer = document.getElementById("music-four");
const musicInstrumentFivePlayer = document.getElementById("music-five");

const instrumentOne = document.getElementById("instrument-one");
const instrumentTwo = document.getElementById("instrument-two");
const instrumentThree = document.getElementById("instrument-three");
const instrumentFour = document.getElementById("instrument-four");
const instrumentFive = document.getElementById("instrument-five");

instrumentOne.onclick = async (evt) => {
  evt.preventDefault();
  playOrPauseSong(musicInstrumentOnePlayer)
};

instrumentTwo.onclick = async (evt) => {
  evt.preventDefault();
  playOrPauseSong(musicInstrumentTwoPlayer)
}

instrumentThree.onclick = async (evt) => {
  evt.preventDefault();
  playOrPauseSong(musicInstrumentThreePlayer)
}

instrumentFour.onclick = async (evt) => {
  evt.preventDefault();
  playOrPauseSong(musicInstrumentFourPlayer)
}

instrumentFive.onclick = async (evt) => {
  evt.preventDefault();
  playOrPauseSong(musicInstrumentFivePlayer)
}

async function playOrPauseSong(musicPlayer) {
  return musicPlayer.paused
    ? await musicPlayer.play()
    : await musicPlayer.pause();
}