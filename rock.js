function getRandomArbitrary() {
    let max = 3;
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    num = getRandomArbitrary()
    return num === 0 ? "Rock"
         : num === 1  ? "Paper"
         : "Scissors";


}
function computerSelection() {
    return (computerPlay(getRandomArbitrary()))
}
//Input player selection;
function playerSelection() {
    let player = prompt ("Choose rock, paper, or scissors");
//make case insensitive;
    return (player[0].toUpperCase() + player.substring(1).toLowerCase());
}

//play round;
function playRound()  {
    let pS = playerSelection();
    let cS = computerSelection();
//compare computer selection to player selection;
 
//test all possible outcomes;
    return pS == cS ? "It's a Tie!"
        : pS == "Rock" && cS == "Paper" ? "You Lose! " + cS + " beats " + pS
        : pS == "Rock" && cS == "Scissors" ? "You Win! " + pS + " beats " + cS
        : pS == "Paper" && cS == "Rock" ? "You Win! " + pS + " beats " + cS
        : pS == "Paper" && cS == "Scissors" ? "You Lose! " + cS + " beats " + pS
        : pS == "Scissors" && cS == "Rock" ? "You Lose! " + cS + " beats " + pS
        : "You Win! " + pS + " beats " + cS;
}
//output string declaring results;
//console.log (playRound())
//repeat 5 times;
function game() {
    let c = 0;
    let pScore = 0;
    let cScore = 0;
    let tie = 0;
    while (c < 5) {
        let pR = playRound()
        c++;
        pR.includes("Win") ? pScore += 1
            : pR.includes("Lose") ? cScore += 1
            : tie += 1;
        console.log (pR);
    }
    return ("Your score: " + pScore + " My score: " + cScore)     
}
console.log(game());
