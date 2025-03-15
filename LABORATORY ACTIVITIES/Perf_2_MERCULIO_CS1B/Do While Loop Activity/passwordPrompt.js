let password = "hulaanmo123"; //the correct password
let user_password; //declare a variable to store user input
do {
    user_password = prompt("Enter your password:"); //prompt the user to enter a password
    console.log("Incorrect, try again");
} while (user_password !== password); //keep asking until the correct password is entered

console.log("Access granted.");
