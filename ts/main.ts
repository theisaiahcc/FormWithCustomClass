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
    
    game.title = (<HTMLInputElement>$("title")).value;
    game.price = parseFloat((<HTMLInputElement>$("price")).value);
    game.rating = (<HTMLInputElement>$("rating")).value;
    game.onlineExclusive = (<HTMLInputElement>$("online")).checked;

    return game;
}

function allDataValid(){
    return true; //placeholder
}