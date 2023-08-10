let getComputerChoice = () => {
    rand = Math.floor(Math.random()*3);
    let computerSelection;
    switch(rand){
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2: 
            computerSelection = "scissors";
            break;
        default:
            computerSelection = "error when generating computer choice"
            break;
    }
    return computerSelection 
}

let playGame = (player_selection, computer_selection) => {
    player_selection = player_selection.toLowerCase()
    let result;
    if (player_selection === computer_selection){
        result = `Both players selected ${player_selection} and therefore the game was a draw.`;
    } else if ((player_selection === "scissors" && computer_selection === "rock") || (player_selection === "rock" && computer_selection === "paper") || (player_selection === "paper" && computer_selection === "scissors")){
        result = `You selected ${player_selection}, but the computer selected ${computer_selection}, so the computer wins.`;
    } else {
        result = `The computer selected ${computer_selection} and you selected ${player_selection}, so you won!`;
    }
    return result;
}

let computer_choice = getComputerChoice();
console.log(playGame("ROCK", computer_choice));