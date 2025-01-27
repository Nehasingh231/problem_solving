const userInput = document.querySelector(".userinput");
const form = document.querySelector(".form");
const result = document.querySelector(".result");
const allGuesses = document.querySelector(".all-guesses")
const submitBtn = document.querySelector(".submit");
const restartGame = document.querySelector(".restart")

function game() { // we wrapped our code in function it helps in this way that noone can see random number from console.
const allGuessesArray = []
let randomNumber = Math.round(Math.random() * 100);
// console.log(randomNumber);

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInputValue = parseInt(userInput.value) // parseInt used for convert string into number
    if(userInputValue < randomNumber) {
       result.innerText = "Too Low"
    } else if (userInputValue > randomNumber) {
        result.innerText = "Too High"
    } else {
        result.innerText = "Congrats! You guess right Number"
        restartGame.disabled = false
        submitBtn.disabled = true
    }
     allGuessesArray.push(userInputValue);
     allGuesses.innerText = "Your Guesses:" + allGuessesArray.join(', ')//join use to convert in string and add comaas
    form.reset() // is used for empty input field
})

restartGame.addEventListener("click", () => {
  result.innerText = "";
  allGuesses.innerText = "";
  submitBtn.disabled = false;
  restartGame.disabled = true;
  randomNumber =  Math.round(Math.random() * 100);
})
}
game();
