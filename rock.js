max = 3;
function getRandomArbitrary() {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    num = getRandomArbitrary(max)
    return num === 0 ? "Rock"
         : num === 1  ? "Paper"
         : "Scissors";


}
let computerSelection = computerPlay(getRandomArbitrary(max))
//Input player selection;
player = prompt ("Choose rock, paper, or scissors");
//make case insensitive;
const playerSelection = player[0].toUpperCase() + player.substring(1).toLowerCase();
console.log(playerSelection);
//play round;
function playRound(playerSelection, computerSelection)  {

//compare computer selection to player selection;
 
//test all possible outcomes;
return playerSelection == computerSelection ? "It's a Tie!"
    : playerSelection == "Rock" && computerSelection == "Paper" ? "You Lose! " + computerSelection + " beats " + playerSelection
    : playerSelection == "Rock" && computerSelection == "Scissors" ? "You Win! " + playerSelection + " beats " + computerSelection
    : playerSelection == "Paper" && computerSelection == "Rock" ? "You Win! " + playerSelection + " beats " + computerSelection
    : playerSelection == "Paper" && computerSelection == "Scissors" ? "You Lose! " + computerSelection + " beats " + playerSelection
    : playerSelection == "Scissors" && computerSelection == "Rock" ? "You Lose! " + computerSelection + " beats " + playerSelection
    : "You Win! " + playerSelection + " beats " + computerSelection;
}
//output string declaring results;

console.log (playRound(playerSelection, computerSelection));
