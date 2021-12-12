var playerControlCentral = document.getElementsByClassName('plyr__controls')[0];


function createSkipBtn(){
    var skipBtn = document.createElement('button');
    skipBtn.setAttribute('class','plyr__controls__item plyr__control');
    skipBtn.setAttribute('type', 'button');
    skipBtn.setAttribute('id', 'skipbtnAnimePro');
    skipBtn.setAttribute('onclick', 'skipIntroBtn();');
    playerControlCentral.appendChild(skipBtn);
}

function skipIntroBtn(){
    var videoPro = document.getElementById('hls-player');
    videoPro.currentTime += 86;
}




playerControlCentral.onload = function(){
    createSkipbtn();
}
