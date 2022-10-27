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
    console.log("Add video game was called");
    clearAllErrors();
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
    if (game.exclusive == "Yes") {
        gameInfo.innerText += "It is a platform exclusive.";
    }
    else {
        gameInfo.innerText += "It is not a platform exclusive.";
    }
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getVideoGame() {
    var game = new VideoGame();
    game.title = getInput("title").value;
    game.price = parseFloat($("price").value);
    game.rating = getInput("rating").value;
    game.exclusive = getInput("exclusive").value;
    return game;
}
function getInput(id) {
    return $(id);
}
function allDataValid() {
    var isValid = true;
    isValid = validateInput("title");
    var price = getInput("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        postError("Price is required and must be a number.");
    }
    isValid = validateInput("rating");
    isValid = validateInput("exclusive");
    return isValid;
}
function clearAllErrors() {
    var errSummary = $("validation-summary");
    errSummary.innerText = "";
}
function postError(message) {
    var errSummary = $("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = "*" + message;
    errSummary.appendChild(errItem);
}
function validateInput(id) {
    var input = getInput(id).value;
    if (input == "") {
        postError(capitalizeFirstLetter(id) + " is required.");
        return false;
    }
    return true;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
