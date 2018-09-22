//Global variables and grabbing elements for DOM manipulation
let playerScore = 0;
let computerScore = 0;
let total = 0;
let playerName = "Player";
const playerScoreContent = document.querySelector("#PlayerScore")
const computerScoreContent = document.querySelector("#ComputerScore")
const playerNameConent = document.querySelector("#PlayerName")


playerScoreContent.classList.add("playerScoreContent");
playerScoreContent.textContent = playerScore;
computerScoreContent.classList.add("computerScoreContent");
computerScoreContent.textContent = computerScore;
playerNameConent.textContent = playerName;


// const arena = document.querySelector("#arena")
const roundContent = document.querySelector("#roundcontent");
const selectionContent = document.querySelector("#selectioncontent");
const animation = document.querySelector(".animate-flicker");
const rockSelection = document.querySelector("#rock-selection");
const paperSelection = document.querySelector("#paper-selection");
const scissorSelection = document.querySelector("#scissor-selection");
const compRockSelection = document.querySelector("#comp-rock-selection");
const compPaperSelection = document.querySelector("#comp-paper-selection");
const compScissorSelection = document.querySelector("#comp-scissor-selection");
const choiceAnimation = document.querySelector(".choice");
const resultContent = document.querySelector("#result");
const gameEndsContent = document.querySelector("#game-ends-content");
const playAgainButton = document.querySelector("#play-again-button");

let gameDecided = false;
let RoundNumber = 0;
const round = document.querySelector("#round");
window.addEventListener("load", initialise);

function initialise(){
        RoundNumber = 0;
        gameDecided = false;
        playerScore = 0;
        computerScore = 0;
        total = 0;
        playerName = "Player";
        hideRound();
        showSelections();
        showResult();
        showRound();
        showEndgame();
}

function computerPlay(){

    let SelectionArray = ["rock", "paper", "scissor"];
    let RandomNumber = Math.floor(Math.random() * SelectionArray.length); //Creates a random number between 0 and the number of entries in the array.
    let RandomSelection = SelectionArray[RandomNumber]; //Uses the random number to select a random entry in the array.
    if (RandomSelection == "rock"){
        compRockSelection.style.backgroundColor = "red";
        }
        else if (RandomSelection == "paper"){
                compPaperSelection.style.backgroundColor = "red";
        }
        else{
                compScissorSelection.style.backgroundColor = "red";
        }
    return RandomSelection;

}

function playRound(computerSelection, playerSelection){
    console.log(computerSelection, playerSelection)    
    if (computerSelection == "rock" && playerSelection == "paper"){
                calculateScore(1, 0, 1);
                result("won");
    } 
        else if (computerSelection == "rock" && playerSelection == "scissor"){
                calculateScore(0, 1, 1)
                result("loss");
        }
        else if (computerSelection == "rock" && playerSelection == "rock"){
                calculateScore(0, 0, 1);
                result("draw");
        }
        else if (computerSelection == "paper" && playerSelection == "paper"){
                calculateScore(0, 0, 1);
                result("draw");
        }
        else if (computerSelection == "paper" && playerSelection == "scissor"){
                calculateScore(1, 0, 1);
                result("won");
        }
        else if (computerSelection == "paper" && playerSelection == "rock"){
                calculateScore(0, 1, 1);
                result("loss");
        }
        else if (computerSelection == "scissor" && playerSelection == "paper"){
                calculateScore(0, 1, 1);
                result("loss");
        }
        else if (computerSelection == "scissor" && playerSelection == "scissor"){
                calculateScore(0, 0, 1);
                result("draw");
        }
        else if (computerSelection == "scissor" && playerSelection == "rock"){
                calculateScore(1, 0, 1);
                result("won");
        }
    // return [playerScore, computerScore];
}

function resetSelections(){
        compRockSelection.style.backgroundColor = "";
        compPaperSelection.style.backgroundColor = "";
        compScissorSelection.style.backgroundColor = "";

        rockSelection.style.backgroundColor = "";
        paperSelection.style.backgroundColor = "";
        scissorSelection.style.backgroundColor = "";

}

function result(resultpara){
        let outcome = resultpara;
        window.setTimeout(resetSelections, 1000)
        window.setTimeout(showSelections, 1000)
        window.setTimeout(function(){setResult(outcome)}, 1000)
        // window.setTimeout(function(){result.textContent = "You won!"}, 1000)
        resultContent.addEventListener("webkitAnimationEnd", showResult, false);
        resultContent.addEventListener("webkitAnimationEnd", showRound, false);


}

function calculateScore(p, c, t){

        total = total + t;
        console.log(total);

    if (p == 1){
        playerScore = playerScore + 1;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if (c == 1){
        computerScore = computerScore + 1;
        console.log(playerScore);
        console.log(computerScore);
    }

    if (total == 5 && playerScore > computerScore){
        endGame("won");
        console.log("won 1");  
        }
        else if (total == 4 && playerScore >= 3 && computerScore <= 1){
                endGame("won");
                console.log("won 2");  
                }
                else if (total == 4 && playerScore >= 2 && computerScore == 0){
                        endGame("won");
                        console.log("won 2");  
                        }
        else if (total == 3 && playerScore == 3){
                        endGame("won");
                        console.log("won 3");  
                        }
                        else if (total == 5 && computerScore > playerScore){
                                endGame("lost");
                                console.log("lost 1");  
                                }
                                else if (total == 4 && computerScore >= 3 && playerScore <= 1){
                                        endGame("lost");
                                        console.log("lost 2");  
                                        }
                                else if (total == 4 && computerScore >= 2 && playerScore <= 0){
                                                endGame("lost");
                                                console.log("lost 2");  
                                                }
                                else if (total == 3 && computerScore == 3){
                                                endGame("lost");
                                                console.log("lost 3");  
                                                }
        else if (total == 5 && playerScore <= 2 && computerScore <= 2){
                endGame("drew");
                console.log("drew"); }

    //Show Scores on Webpage
    playerScoreContent.textContent = playerScore;
    computerScoreContent.textContent = computerScore;

     return [playerScore, computerScore];
}


function endGame(state){
        window.setTimeout(showEndgame, 4000)
        gameDecided = true;
        let gameOutcome = state;
        let emoticon;
        if (gameOutcome == "won"){
                emoticon = ":D";
        } else if (gameOutcome == "lost"){
                emoticon = ":(";
        } else if (gameOutcome == "drew"){
                emoticon = ":)";}            
        
        window.setTimeout(function(){gameEndsContent.textContent = `You ${gameOutcome} the game! ${emoticon}`}, 4000)
        playAgainButton.addEventListener("click", initialise, false);
                        
}




//When player clicks button, send the choice to the playerPlay function.
rockSelection.addEventListener("click", function(){playerPlay("rock")}, false);
paperSelection.addEventListener("click", function(){playerPlay("paper")}, false);
scissorSelection.addEventListener("click", function(){playerPlay("scissor")}, false);

function showRound(){
        if (RoundNumber < 5 && gameDecided == false){
                if (roundContent.style.display === "none") {
                        roundContent.style.display = "block";
                    } else {
                        roundContent.style.display = "none";
                    }
                RoundNumber++;
                round.textContent = `Round ${RoundNumber} of 5`;    
                animation.addEventListener("webkitAnimationEnd", hideRound, false);
                animation.addEventListener("webkitAnimationEnd", showSelections, false);
        }


    //animation.addEventListener("webkitAnimationEnd", hideRound, false);
}

function hideRound(){
        if (roundContent.style.display === "none") {
                roundContent.style.display = "block";
            } else {
                roundContent.style.display = "none";
            }
}

function showSelections(){
        if (selectionContent.style.display === "none") {
                selectionContent.style.display = "block";
            } else {
                selectionContent.style.display = "none";
            }
}

function showEndgame(){
        if (gameEndsContent.style.display === "none") {
                gameEndsContent.style.display = "block";
            } else {
                gameEndsContent.style.display = "none";
            }
}

function setResult(outcome){
        if (outcome == "won"){
                resultContent.textContent = "You won!";
        } else if (outcome == "draw"){
                resultContent.textContent = "You drew!";
        } else {
                resultContent.textContent = "You lost!";
        }
        showResult();
}

function showResult(){
        if (resultContent.style.display === "none") {
                resultContent.style.display = "block";
            } else {
                resultContent.style.display = "none";
            }
}

function playerPlay(selection){

        let choice = selection;
        let computerChoice;
        if (choice == "rock"){
                rockSelection.style.backgroundColor = "blue";
        }
        else if (choice == "paper"){
                paperSelection.style.backgroundColor = "blue";
        }
        else{
                scissorSelection.style.backgroundColor = "blue";
        }
        computerChoice = computerPlay();
        playRound(computerChoice, choice);
        return choice;
}


