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
console.log (computerPlay(getRandomArbitrary(max)))
