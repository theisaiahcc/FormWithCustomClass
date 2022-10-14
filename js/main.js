var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("button");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (allDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function displayGame(game) {
}
function getVideoGame() {
    var Game = new VideoGame();
    return Game;
}
function allDataValid() {
    return true;
}
