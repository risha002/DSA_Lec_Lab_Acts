let favNum = 20; //define the number that the user needs to guess

//prompt the user to enter their first guess
let guess = parseInt(prompt("Enter your guess: "));

while (guess !== favNum) {
    if (guess  > favNum) { //checks if the user guesses the correct number
        console.log("Too High") //inform the user if their guess is too high
    } else{
        console.log("Too Low"); //inform the user their guess is too low
    }
    guess = parseInt(prompt("Guess again: ")); //prompt the user to guess again
}

//when the loop exits, the correct number has been guessed
console.log("You're correct!");
