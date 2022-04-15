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

console.log(introductionVideo);

  

let menuOpenButton = document.getElementById("hamburgerOpen");
let menuCloseButton = document.getElementById("hamburgerClose");
let navigationList = document.getElementsByClassName("navigation-list")[0];
let openedMenu = 0;

menuOpenButton.addEventListener("click", openMenu);

function openMenu () {
    navigationList.classList.add("opened");
    menuOpenButton.style.display = "none";
    menuCloseButton.style.display = "block";
    openedMenu++;
}

menuCloseButton.addEventListener("click", closeMenu);

function closeMenu () {
    navigationList.classList.remove("opened");
    menuOpenButton.style.display = "block";
    menuCloseButton.style.display = "none";
    openedMenu -= 1;
}

function resizeScreen () {
    let width = window.innerWidth;

    if(width >= 960){
        menuOpenButton.style.display = "none";
        menuCloseButton.style.display = "none";
        navigationList.classList.remove("opened");
        openedMenu = 0;
    }
    else if(width < 960){
        if(openedMenu == 0){
            menuOpenButton.style.display = "block";
        }
    }
}

