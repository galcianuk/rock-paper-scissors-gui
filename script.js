function game(){
    let playerSelection;
    let computerSelection;
    let result;

    // if (result == )
    for(round = 0; round < 3; round++){
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    result = playRound(computerSelection, playerSelection);
    // game();
    }
    if (result > 0){
        alert("You win the game!")
    }
    else if (result < 0){
        alert("You lose the game ")
    }
    else if (result == 0){
        alert("You draw! ")
    }
}

function computerPlay(){

    let SelectionArray = ["Rock", "Paper", "Scissor"];
    let RandomNumber = Math.floor(Math.random() * SelectionArray.length); //Creates a random number between 0 and the number of entries in the array.
    let RandomSelection = SelectionArray[RandomNumber]; //Uses the random number to select a random entry in the array.
    alert("The computer selected " + RandomSelection)
    return RandomSelection;

}

function playRound(computerSelection, playerSelection){
    let result = 0;

    if (computerSelection == "Rock" && playerSelection == "paper"){
        alert("You win, Paper beats Rock :)");
        result = result + 1;
    } 
        else if (computerSelection == "Rock" && playerSelection == "scissor"){
                alert("You lose, Rock beats Scissor :(");
                result = result - 1;
        }
        else if (computerSelection == "Rock" && playerSelection == "rock"){
                alert("It's a draw this round!");
        }
        else if (computerSelection == "Paper" && playerSelection == "paper"){
                alert("It's a draw this round!");
        }
        else if (computerSelection == "Paper" && playerSelection == "scissor"){
                alert("You win Scissors beat Paper :)");
                result = result + 1;
        }
        else if (computerSelection == "Paper" && playerSelection == "rock"){
                alert("You lose, Paper beats Rock :(");
                result = result - 1;
        }
        else if (computerSelection == "Scissor" && playerSelection == "paper"){
                alert("You lose, Scissors beat Paper :(");
                result = result - 1;
        }
        else if (computerSelection == "Scissor" && playerSelection == "scissor"){
                alert("It's a draw this round!");
        }
        else if (computerSelection == "Scissor" && playerSelection == "rock"){
                alert("You win! Rock beats Scissors!");
                result = result + 1;
        }

    return result;
}

function playerPlay(){
    let choice;

        x = prompt("Rock, Paper or Scissor?");
        feedback();

    function feedback(){
        choice = x.toLowerCase();
        switch (choice){
            case "rock":
            alert("You selected Rock");
            return choice;
            break;
            case "paper":
            alert("You selected Paper");
            return choice;
            break;
            case "scissor":
            alert("You selected Scissor");
            return choice;
            break;
            default:
            x = prompt("You didn't make a correct selection, please select again: Rock, Paper or Scissor?");
            feedback();
    }
}
return choice;
}