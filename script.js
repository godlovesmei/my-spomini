const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('audio');
const durationText = document.getElementById('duration');

let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = 'Play';
  } else {
    audio.play();
    playBtn.textContent = 'Pause';
  }
});

audio.addEventListener('timeupdate', () => {
  const mins = Math.floor(audio.currentTime / 60);
  const secs = Math.floor(audio.currentTime % 60);
  durationText.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
});

audio.addEventListener('ended', () => {
  playBtn.textContent = 'Play';
  isPlaying = false;
});

audio.addEventListener('play', () => isPlaying = true);
audio.addEventListener('pause', () => isPlaying = false);
