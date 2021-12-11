function createSkipBtn(){
    var skipBtn = document.createElement('button');
    skipBtn.setAttribute('class','plyr__controls__item plyr__control');
    skipBtn.setAttribute('type', 'button');
    skipBtn.setAttribute('id', 'skipbtnAnimePro');
    skipBtn.setAttribute('onclick', 'skipIntroBtn();');
    var skipbtnImg = document.createElement('img').src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwoJLnN0MHtmaWxsOiMwMTAxMDE7fQpdXT48L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MzYuMyw5NmgtOC4xYy02LjcsMC0xMi4yLDUtMTIuMiwxMS43djExMy41TDIyOC45LDk4LjdjLTIuNS0xLjctNS4xLTIuMy04LjEtMi4zYy04LjMsMC0xNS40LDctMTUuNCwxN3Y2My4xICBMODYuOSw5OC4zYy0yLjUtMS43LTUuMS0yLjMtOC4xLTIuM2MtOC4zLDAtMTQuOSw3LjQtMTQuOSwxNy40djI4NmMwLDEwLDYuNywxNi41LDE1LDE2LjVjMy4xLDAsNS40LTEuMiw4LjItMi45bDExOC4zLTc3LjZ2NjQgIGMwLDEwLDcuMiwxNi41LDE1LjUsMTYuNWMzLjEsMCw1LjUtMS4yLDguMi0yLjlMNDE2LDI5MC44djExM2MwLDYuNyw1LjQsMTIuMiwxMi4yLDEyLjJoOC4xYzYuNywwLDExLjctNS41LDExLjctMTIuMlYxMDcuNyAgQzQ0OCwxMDEsNDQzLjEsOTYsNDM2LjMsOTZ6Ii8+PC9zdmc+';
    document.getElementById('skipbtnAnimePro').appendChild(skipbtnImg);
    document.getElementsByClassName('plyr__controls')[0].appendChild(skipBtn);
}

function skipIntroBtn(){
    var videoPro = document.getElementById('hls-player');
    videoPro.currentTime += 86;
}

window.onload = function(){
    createSkipBtn();
}
