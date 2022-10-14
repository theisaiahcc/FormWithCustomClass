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
    // TODO: display video game below form
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