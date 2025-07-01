const music = document.getElementById("bg-music");
const musicPlayer = document.getElementById("music-player");
const seekBar = document.getElementById("seek-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicPlayer.style.display = "block";
  } else {
    music.pause();
  }
}

function stopMusic() {
  music.pause();
  music.currentTime = 0;
}

music.addEventListener("loadedmetadata", () => {
  seekBar.max = music.duration;
  durationEl.textContent = formatTime(music.duration);
});

music.addEventListener("timeupdate", () => {
  seekBar.value = music.currentTime;
  currentTimeEl.textContent = formatTime(music.currentTime);
});

seekBar.addEventListener("input", () => {
  music.currentTime = seekBar.value;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
function scrollToHome() {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}
function scrollToPartner() {
  document.getElementById("partner").scrollIntoView({ behavior: "smooth" });
}