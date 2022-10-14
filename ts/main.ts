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
    // TODO: display video game below form
}

function getVideoGame():VideoGame{
    let Game = new VideoGame();
    
    // TODO: Populate with data

    return Game;
}

function allDataValid(){
    return true; //placeholder
}