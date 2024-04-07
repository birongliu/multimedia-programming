const musicPlayer = document.getElementById("sourceMusicPlayer");
const imageMap = document.getElementById("sourceImage");

imageMap.onclick = async (evt) => {
  evt.preventDefault();
  console.log("hello");
  return musicPlayer.paused
    ? await musicPlayer.play()
    : await musicPlayer.pause();
};
