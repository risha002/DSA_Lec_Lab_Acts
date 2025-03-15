let correct_number = 2; //the correct number
let guess = 0; //initialize the guess variable

while (guess !== correct_number) { //keep looping until the correct number is guessed
    guess = parseInt(prompt("Guess a number between 1 and 10")); //prompt the user

    if (guess > correct_number) {
        console.log("Too high!");
    } else if (guess < correct_number) {
        console.log("Too low!");
    }
}

console.log("Correct!");