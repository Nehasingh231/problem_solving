const message = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let attempts = 0;
let maxAttempts = 10;

function checkGuess() {
    const guessInput = Number(document.getElementById("guess").value);
   attempts++;
   attemptsEl.innerText = `Attempts: ${attempts}`;

   if(attempts > maxAttempts) {
    message.innerText = "Game Over! You've used all your attempts.";
    attemptsEl.innerText = "Attempts: 0";
    message.style.color = "red";
    return;
   }

    if(guessInput === randomNumber) {
        message.innerText = `Congratulations! You guessed the right number! It was ${randomNumber}`;
        message.style.color = "green";
    } else if (guessInput > randomNumber) {
         message.innerText = "Too high! Try again.";
            message.style.color = "red";
        } else{
            message.innerText = "Too low! Try again.";
            message.style.color = "red";
           
        }

   }

   function restart(){
       randomNumber = Math.floor(Math.random() * 100) + 1;// new random no
    attempts = 0;
     attemptsEl.innerText = `Attempts: ${attempts}`;
    message.innerText = ""
    document.getElementById("guess").value = "";
   }
