let introductionVideo = document.getElementById("introductionVideo");
let playButton = document.getElementById("playButton");
let playingVideo = 0;

introductionVideo.addEventListener("onclick", playVideo);

function playVideo () {
    if(playingVideo == 0){
        introductionVideo.play();
        playButton.style.display = "none";
        playingVideo++;
    }
    else if(playingVideo == 1){
        introductionVideo.pause();
        playButton.style.display="block";
        playingVideo -= 1;
    }
}

console.log(playingVideo);