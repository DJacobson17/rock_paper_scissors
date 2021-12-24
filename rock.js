let pScore = 0;
let cScore = 0;
const result = document.getElementById("p1");
const scorePara = document.getElementById("p2");
const finalResult = document.getElementById("p3");

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
    let player = btnSelection;
//make case insensitive;
    return (player[0].toUpperCase() + player.substring(1).toLowerCase());
}
document.getElementById("Rock").addEventListener("click", function() {
    btnSelection = "Rock";
    game();
 });

document.getElementById("Paper").addEventListener("click", function() {
    btnSelection = "Paper";
    game();
 });

document.getElementById("Scissors").addEventListener("click", function() {
    btnSelection = "Scissors";
    game();
});



//play round;
function playRound()  {
    let pS = btnSelection;
    let cS = computerSelection();;
//compare computer selection to player selection;
 
//test all possible outcomes;
    if (pS == cS) {
        para = ("It's a Tie!");
        return (para)
    }
    else if (
        (pS == "Rock" && cS == "Scissors") ||
        (pS == "Paper" && cS == "Rock") ||
        (pS == "Scissors" && cS == "Paper")) {
         
        para = ("You Win! " + pS + " beats " + cS);
        return (para);
    }
    else {
        para = ("You Lose! " + cS + " beats " + pS);
        return (para)
    }
    console.log (pScore)

}
//output string declaring results;

//repeat 5 times;
function game() {
    while (pScore < 5 && cScore < 5) {
        console.log(pScore);
        let pR = playRound();
        result.textContent = (pR);
        if (pR.includes("Win")) {
            pScore += 1;
            scorePara.textContent = ("Your score: " + pScore + " My score: " + cScore);
        }   else if (pR.includes("Lose")) {
             cScore += 1;
             scorePara.textContent = ("Your score: " + pScore + " My score: " + cScore);
        }   else {
            scorePara.textContent = ("Your score: " + pScore + " My score: " + cScore);
    }
        
        
    }
    if (pScore > cScore) {
         let text = document.createTextNode(`You Win ${pScore}:${cScore}!`);
         scorePara.appendChild(text);     

    } else { 
        let text = document.createTextNode(`You Lose ${cScore}:${pScore}!`);
        scorePara.appendChild(text);     

    }

}
