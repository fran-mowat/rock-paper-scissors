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

let gameOutput = (player_selection, computer_selection) => {
    let result;
    let winner;
    if (player_selection === computer_selection){
        result = `Both players selected ${player_selection} and therefore the game was a draw.`;
        winner = false;
    } else if ((player_selection === "scissors" && computer_selection === "rock") || (player_selection === "rock" && computer_selection === "paper") || (player_selection === "paper" && computer_selection === "scissors")){
        result = `You selected ${player_selection}, but the computer selected ${computer_selection}, so the computer wins.`;
        winner = "computer";
    } else {
        result = `The computer selected ${computer_selection} and you selected ${player_selection}, so you won!`;
        winner = "user";
    }
    return [result, winner];
}

let multiRounds = () => {
    let user_score = 0;
    let computer_score = 0;
    let winner = false;

    for (roundNumber=1; roundNumber<6; roundNumber++){
        document.getElementsByTagName("h1").innerHTML = `Round ${roundNumber}`
        game_return = document.getElementById("rock").addEventListener("click", gameOutput("rock", getComputerChoice()));
        game_return = document.getElementById("paper").addEventListener("click", gameOutput("paper", getComputerChoice()));
        game_return = document.getElementById("scissors").addEventListener("click", gameOutput("paper", getComputerChoice()));
        
        result = game_return[0];
        winner = game_return[1];
        document.getElementById("outcome").innerHTML = result;

        if (winner === "user"){
            user_score ++;
        } else if (winner === "computer"){
            computer_score ++;
        } else{
            pass;
        }
        
        document.getElementById("user_score").innerHTML =(` User score: ${user_score}`);
        document.getElementById("computer_score").innerHTML =(` Computer score: ${computer_score}`);
    }

    if (user_score > computer_score){
        console.log("Congradulations! You won the game.");
    } else if (user_score < computer_score){
        console.log("The computer beat you this time. Try playing again!");
    } else{
        console.log("You drew with the computer. Play again to find out who the real champion is!");
    }
}

multiRounds();