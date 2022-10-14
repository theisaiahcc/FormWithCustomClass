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
    var displayDiv = $("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;
    var gameInfo = document.createElement("p");
    gameInfo.innerText = game.title + " has a rating of " + game.rating + ". It costs $" + game.price.toFixed(2) + ". ";
    if (game.onlineExclusive) {
        gameInfo.innerText += "It is an online exclusive.";
    }
    else {
        gameInfo.innerText += "It is not an online exclusive.";
    }
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
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
