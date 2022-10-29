function $(id:string){
    return document.getElementById(id);
}

class VideoGame{
    title:string;
    price:number;
    rating:string;
    exclusive:string;
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
    
    if(game.exclusive == "Yes"){
        gameInfo.innerText += "It is a platform exclusive."
    }

    else{
        gameInfo.innerText += "It is not a platform exclusive."
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
    game.exclusive = getInput("exclusive").value;

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
    return validateInput("title") && validatePrice("price") && validateInput("rating") && validateInput("exclusive");
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

/**
 * Reduces code redundancy in allDataValid method
 * @param id id of desired input element
 * @returns true if not empty
 */
function validateInput(id:string):boolean{
    let input = getInput(id).value;
    if(input == ""){
        postError(capitalizeFirstLetter(id) + " is required.");
        return false;
        
    }
    return true;
}

// capitalizes first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// validates price because its different.
function validatePrice (id:string):boolean{
    let price = getInput("price").value;
    let priceValue = parseFloat(price);

    if(price == "" || isNaN(priceValue)){
        postError("Price is required and must be a number.");
        return false;
    }
    return true;
}
