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
    console.log(choice)
    return choice 
}

let computerChoice = () => {
    return numToChoice(generateRand());
}

let gameOutcome = (player_selection, computer_selection) => {
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

    for (roundNumber=1; roundNumber<6; roundNumber++){
        document.getElementsByTagName("h1").innerHTML = `Round ${roundNumber}`

        //let user_choice = document.getElementById("user_selection").onclick.innerHTML;
        console.log(user_choice);

        game_return = document.getElementById("rock").addEventListener("click", gameOutcome("rock", getComputerChoice()));
        game_return = document.getElementById("paper").addEventListener("click", gameOutcome("paper", getComputerChoice()));
        game_return = document.getElementById("scissors").addEventListener("click", gameOutcome("paper", getComputerChoice()));
        
        let result = game_return[0];
        let winner = game_return[1];
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