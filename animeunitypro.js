function createSkipBtn(){
    var skipBtn = document.createElement('button');
    skipBtn.setAttribute('class','plyr__controls__item plyr__control');
    skipBtn.setAttribute('type', 'button');
    skipBtn.setAttribute('id', 'skipbtnAnimePro');
    skipBtn.setAttribute('onclick', 'skipIntroBtn();');
}

function skipIntroBtn(){
    var videoPro = document.getElementById('hls-player');
    videoPro.currentTime += 86;
}
