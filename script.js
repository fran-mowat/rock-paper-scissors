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
    let round_no = 1;
    let winner = false;
    for (i=0; i<5; i++){
        let user_choice = "rock"
        let game_return = playGame(user_choice, getComputerChoice());
        result = game_return[0]
        winner = game_return[1]
        console.log(result)
        if (winner === "user"){
            user_score ++;
        } else if (winner === "computer"){
            computer_score ++;
        } else{
            //
        }
        console.log(`Round ${round_no}`);
        console.log(`    User score: ${user_score}`);
        console.log(`    Computer score: ${computer_score}`);
        round_no ++;
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