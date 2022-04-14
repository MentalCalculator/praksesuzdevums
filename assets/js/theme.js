let introductionVideo = document.getElementById("introductionVideo");
let playButton = document.getElementById("playButton");
let videoSection = document.getElementsByClassName("video-section")[0];
let playingVideo = 0;

videoSection.addEventListener("click", playVideo);

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



  

let dropdownOpenButton = document.getElementById("hamburgerOpen");
let dropdownCloseButton = document.getElementById("hamburgerClose");
let navigationList = document.getElementsByClassName("navigation-list")[0];


dropdownOpenButton.addEventListener("click", openMenu);

function openMenu () {
    navigationList.classList.add("opened");
    dropdownOpenButton.style.display = "none";
    dropdownCloseButton.style.display = "block";
}

dropdownCloseButton.addEventListener("click", closeMenu);

function closeMenu () {
    navigationList.classList.remove("opened");
    dropdownOpenButton.style.display = "block";
    dropdownCloseButton.style.display = "none";
}



