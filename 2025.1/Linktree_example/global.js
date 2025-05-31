document.getElementById('music-checkbox').addEventListener('change', playMusic);

function playMusic() {
    var audio = document.getElementById('audio-player');
    var checkbox = document.getElementById('music-checkbox');
  
    if (checkbox.checked) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; 
    }
}