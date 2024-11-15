
var maxNumber;
var attemptsLeft;
var secretNumber;



// Function to check game levels

function startGame(){
    var gameLevel = document.getElementById("gameLevels").value;

    if(gameLevel === "easy") {
        maxNumber = 10;
        attemptsLeft = 5;
    }
    else if(gameLevel === "medium") {
        maxNumber = 50;
        attemptsLeft = 7;
    }
    else if(gameLevel === "hard") {
        maxNumber = 100;
        attemptsLeft = 10;
    }


    secretNumber = Math.floor(Math.random() * maxNumber) + 1

    document.getElementById("numberRange").innerHTML = "1 - " + maxNumber;
    document.getElementById("attempts-left").innerHTML = attemptsLeft;
    document.getElementById("level_text").style.display = "block";
}




var resultDisplay = document.getElementById("result_display");
var submiButton = document.getElementById("guess_btn");


// Function for user value check

function userGuessCheck(){

    var userGuessNum = document.getElementById("userNumber");

  if(isNaN(userGuessNum.value) || userGuessNum.value < 1 || userGuessNum.value > 100 || (userGuessNum.value > maxNumber)) {
    resultDisplay.innerText = "Please enter a valid number between 1 - " + maxNumber ;
    userGuessNum.value = "";
    return;
  }

  attemptsLeft--;
  document.getElementById("attempts-left").innerHTML = attemptsLeft;
  

  if(Number(userGuessNum.value) === secretNumber) {
    resultDisplay.innerHTML = "<h2>Applause! You guess it right.</h2> <img src= './assets/congrats-gif-49.gif' >";
    resultDisplay.style.color = "rgb(0, 7, 99, 0.8)";
    userGuessNum.value = "";
    userGuessNum.disabled = true;
    submiButton.disabled = true;
  }

  else if(attemptsLeft === 0) {
    resultDisplay.innerText = `😢Game Over! the number was ${secretNumber}, play again`;
    userGuessNum.disabled = true;
    submiButton.disabled = true;
  }
  else if(Number(userGuessNum.value) < secretNumber) {
    resultDisplay.innerHTML = ` <h2>Too low, try again</h2> <img src='./assets/tryagain.gif' > `;  
    resultDisplay.style.color = "rgb(0, 7, 99, 0.8)";
    userGuessNum.value = "";
  }
  else{
    resultDisplay.innerHTML = `<h2>Too high, try again</h2> <img src='./assets/tryagain.gif' >`;
    resultDisplay.style.color = "rgb(0, 7, 99, 0.8)";
    userGuessNum.value = "";
  }

  userGuessNum.value = "";
}


// Additional functionality

function resetGame() {
    var userGuessNum = document.getElementById("userNumber");
    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    attemptsLeft = document.getElementById("gameLevels").value === "easy" ? 5 : 
    document.getElementById("gameLevels").value === "medium" ? 7 : 10;
    document.getElementById("attempts-left").innerHTML = attemptsLeft;
    document.getElementById("level_text").style.display = "none";
    resultDisplay.innerHTML = "";
    resultDisplay.style.color = "";
    userGuessNum.value = "";
    userGuessNum.disabled = false;
    submitButton.disabled = false;
}




