const rewindButton = document.getElementById('rewind');
const playButton = document.getElementById('play');
const forwardButton = document.getElementById('fastforward');
const audioElement = document.getElementsByTagName('audio')[0];

const song = new Audio('music/killin_me.mpeg');

rewindButton.addEventListener('click', (e) => {
  if (song.paused) {
    rewindButton.style.backgroundColor = '#ccc';
  } else if (!song.paused) {
    song.currentTime -= 0.5;
    rewindButton.style.backgroundColor = 'white';
    setInterval(() => {
      rewindButton.style.backgroundColor = '#ccc';
    }, 500)
  }
  
});

playButton.addEventListener('click', (e) => {
  const playPauseImage = document.getElementById('play_pause');
  if (playPauseImage.src.endsWith('play.png')) {
    playPauseImage.src = 'images/pause.png';
    song.play();
    console.log(song.duration);
  } else if (playPauseImage.src.endsWith('pause.png')) {
    playPauseImage.src = 'images/play.png';
    song.pause();
  }
});

forwardButton.addEventListener('click', (e) => {
  song.currentTime += 0.5;
});
