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
    
    document.getElementById("outcome").innerHTML = result;

    return [result, winner]
}

let multiRounds = () => {
    console.log(getUserChoice());
    let user_score = 0;
    let computer_score = 0;
    for (roundNumber=1; roundNumber<6; roundNumber++){
        document.getElementsByTagName("h1")[0].innerHTML = `Round ${roundNumber}`
        if (getUserChoice()){
            gameOutput = gameOutcome(getUserChoice(), computerChoice())
        }
        
        result = gameOutput[0]
        winner = gameOutput[1]

        if (winner === "user"){
            user_score ++;
        } else if (winner === "computer"){
            computer_score ++;
        } else{
            user_score = user_score;
            computer_score = computer_score;
        }

        document.getElementById("user_score").innerHTML =(`User score: ${user_score}`);
        document.getElementById("computer_score").innerHTML =(`Computer score: ${computer_score}`);
    }

    
    if (user_score > computer_score){
        console.log("Congradulations! You won the game.");
    } else if (user_score < computer_score){
        console.log("The computer beat you this time. Try playing again!");
    } else{
        console.log("You drew with the computer. Play again to find out who the real champion is!");
    }
}

//window.onload = multiRounds();
window.onload = accessUserChoice();