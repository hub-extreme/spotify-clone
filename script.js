document.addEventListener("DOMContentLoaded", function () {
    const songs = [
      {
        title: "Song 1",
        url: "https://drive.google.com/file/d/1-aR6OX-A6rLP-MgItulK7YeuJE5ECsoK/view?ts=66a251c8&pli=1.mp3",
      },
      {
        title: "Song 2",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      },
      {
        title: "Song 3",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      },
    ];
  
    const songList = document.getElementById("songList");
    const audioPlayer = document.getElementById("audioPlayer");
    const currentSong = document.getElementById("currentSong");
  
    songs.forEach((song, index) => {
      const li = document.createElement("li");
      li.textContent = song.title;
      li.addEventListener("click", () => {
        audioPlayer.src = song.url;
        audioPlayer.play();
        currentSong.textContent = `Now Playing: ${song.title}`;
      });
      songList.appendChild(li);
    });
  });