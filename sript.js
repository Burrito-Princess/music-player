var song = new Audio();
function PlaySong(index) {
    song.pause();
    song.src = `./assets/audio/${index}.mp3`;
    song.play();
    console.log(index);
}