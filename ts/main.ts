function $(id:string){
    return document.getElementById(id);
}

class VideoGame{
    title:string;
    price:number;
    rating:string;
    onlineExclusive:boolean;
}

window.onload = function(){
    let addBtn = document.querySelector("button");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    console.log("Add video game was called");
    clearAllErrors();

    if (allDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function displayGame(game:VideoGame):void{
    let displayDiv = $("display")

    // create h2 with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;
    
    

    // create game details paragraph
    let gameInfo = document.createElement("p");

    gameInfo.innerText = game.title  + " has a rating of " + game.rating + ". It costs $" + game.price.toFixed(2) + ". ";
    
    if(game.onlineExclusive){
        gameInfo.innerText += "It is an online exclusive."
    }

    else{
        gameInfo.innerText += "It is not an online exclusive."
    }

    // add h2 and p in the div
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}


/**
 * Creates video game object and fills it with form data
 * @returns new VideoGame()
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    
    game.title = getInput("title").value;
    game.price = parseFloat((<HTMLInputElement>$("price")).value);
    game.rating = getInput("rating").value;
    game.onlineExclusive = getInput("online").checked;

    return game;
}

function getInput(id:string):HTMLInputElement{
    return <HTMLInputElement>$(id);
}

/**
 * validates data
 * @returns true if data is valid
 */
function allDataValid(){
    let isValid = true;
    
    let title = getInput("title").value;
    
    if (title == ""){
        isValid = false;
        postError("Title is required.");
    }
    
    let price = getInput("price").value;
    let priceValue = parseFloat(price);

    if(price == "" || isNaN(priceValue)){
        isValid = false;
        postError("Price is required and must be a number.");
    }

    let rating = getInput("rating").value;
    if(rating == ""){
        isValid = false;
        postError("Rating is required.");
    }

    return isValid;
}

/**
 * clears validation summary
 */
function clearAllErrors() {
    let errSummary = $("validation-summary");
    errSummary.innerText = "";
}

/**
 * posts a message to error <ul>
 * @param message message to post
 */
function postError(message:string){
    let errSummary = $("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = "*" + message;
    errSummary.appendChild(errItem);
}