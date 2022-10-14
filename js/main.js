function $(id) {
    return document.getElementById(id);
}
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
    var game = new VideoGame();
    game.title = $("title").value;
    game.price = parseFloat($("price").value);
    game.rating = $("rating").value;
    game.onlineExclusive = $("online").checked;
    return game;
}
function allDataValid() {
    return true;
}
