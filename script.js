let generateRand = () => {
    rand = Math.floor(Math.random()*3);
    return rand;
}

let numToChoice = (num) => {
    let choice;
    switch(num){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2: 
            choice = "scissors";
            break;
        default:
            choice = "error when generating choice"
            break;
    }
    return choice; 
}

let computerChoice = () => {
    return numToChoice(generateRand());
}

let accessUserChoice = () => {
    document.getElementById("rock").onclick = gameOutcome;
    document.getElementById("paper").onclick = gameOutcome;
    document.getElementById("scissors").onclick = gameOutcome;
}

let gameOutcome = (e) => {
    player_selection = e.target.id
    computer_selection = computerChoice();

    let result;
   
    if (player_selection === computer_selection){
        result = `Both players selected ${player_selection} and therefore the game was a draw.`;
    } else if ((player_selection === "scissors" && computer_selection === "rock") || (player_selection === "rock" && computer_selection === "paper") || (player_selection === "paper" && computer_selection === "scissors")){
        result = `You selected ${player_selection}, but the computer selected ${computer_selection}, so the computer wins.`;
        document.getElementById("computer_score").innerHTML = Number(document.getElementById("computer_score").innerHTML) + 1;
    } else {
        result = `The computer selected ${computer_selection} and you selected ${player_selection}, so you won!`;
        document.getElementById("user_score").innerHTML = Number(document.getElementById("user_score").innerHTML) + 1;
    }
    
    document.getElementById("outcome").innerHTML = result;
    document.getElementById("round_number").innerHTML = Number(document.getElementById("round_number").innerHTML) + 1;

    if (document.getElementById("round_number").innerHTML >= 5){
        endGame()
    }
}

let endGame = () => {
    if (Number(document.getElementById("user_score").innerHTML) > Number(document.getElementById("computer_score").innerHTML)){
        document.getElementById("game_outcome").innerHTML = "Congratulations! You won the game.";
    } else if (Number(document.getElementById("user_score").innerHTML) < Number(document.getElementById("computer_score").innerHTML)){
        document.getElementById("game_outcome").innerHTML = "The computer beat you this time. Try playing again!";
    } else{
        document.getElementById("game_outcome").innerHTML = "You drew with the computer. Play again to find out who the real champion is!";
    }

    document.getElementById("user_selection").style.visibility = "hidden";
    document.getElementsByTagName("p")[0].style.visibility = "hidden";
}

window.onload = accessUserChoice();

// to do: 
// - make game end after playing 5 rounds 
// - generate new game button 
// - add styles