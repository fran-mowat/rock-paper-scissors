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

let computer_choice = getComputerChoice()
console.log(computer_choice)