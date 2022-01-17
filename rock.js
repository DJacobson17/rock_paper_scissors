let pScore = 0;
let cScore = 0;
const result = document.getElementById("p1");
const scorePara = document.getElementById("p2");
const finalResult = document.getElementById("p3");
const buttons = document.querySelectorAll("button");

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
    playRound(btnSelection, computerSelection());
    console.log (pScore);
    if (pScore === 5 || cScore === 5) {
        declareWinner();
        resetButton();
    }

 });

document.getElementById("Paper").addEventListener("click", function() {
    btnSelection = "Paper";
    playRound(btnSelection, computerSelection());
    console.log (pScore);
    if (pScore === 5 || cScore === 5) {
        declareWinner();
        resetButton();
    }

 });

document.getElementById("Scissors").addEventListener("click", function() {
    btnSelection = "Scissors";
    playRound(btnSelection, computerSelection());
    console.log (pScore);
    if (pScore === 5 || cScore === 5) {
        declareWinner();
        resetButton();
    }

});



//play round;
function playRound()  {
    let pS = btnSelection;
    let cS = computerSelection();;
//compare computer selection to player selections;
 
//test all possible outcomes;
    if (pS == cS) {
        para = ("It's a Tie!");
        keepScore(pScore, cScore);
        result.textContent =  para;
    } else if (
        (pS == "Rock" && cS == "Scissors") ||
        (pS == "Paper" && cS == "Rock") ||
        (pS == "Scissors" && cS == "Paper")) {
         
        para = ("You Win! " + pS + " beats " + cS);
        pScore = ++pScore;
        keepScore(pScore, cScore);
        result.textContent = para;
    } else {
        para = ("You Lose! " + cS + " beats " + pS);
        cScore = ++cScore;
        keepScore(pScore, cScore);
        result.textContent = para;
    }
    


}
//output string declaring results;

//repeat 5 times;
// function game() {
//     while (pScore < 5 && cScore < 5) {
//         console.log(pScore);
//         let pR = playRound();
//         result.textContent = (pR);
//         if (pR.includes("Win")) {
//             pScore += 1;
function keepScore(pScore, cScore) {
    scorePara.textContent = ("Your score: " + pScore + " My score: " + cScore);
}
//         }   else if (pR.includes("Lose")) {
//              cScore += 1;
//              scorePara.textContent = ("Your score: " + pScore + " My score: " + cScore);
//         }   else {
//             scorePara.textContent = ("Your score: " + pScore + " My score: " + cScore);
//     }
        
        
//     }

function resetButton()  {
    document.getElementById("butns").innerHTML = '';
    console.log("test");
    let rst = document.createElement('button');
    rst.innerHTML = "hello";
    document.getElementById("butns").appendChild(rst);
}

function declareWinner(pScore, cScore) {
    if (pScore > cScore) {
         finalResult.textContent = "You Win!";     

    } else { 
        finalResult.textContent = "You Lose!";
    }
    //document.getElementById("Rock").removeEventListener("click", function);
}
