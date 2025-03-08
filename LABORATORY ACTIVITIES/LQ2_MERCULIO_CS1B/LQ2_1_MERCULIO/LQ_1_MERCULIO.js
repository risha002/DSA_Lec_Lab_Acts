let user_password = prompt("Enter your password: "); //prompt the user to enter their password
let user_name = prompt("Enter your username: "); //prompt the user to enter their username
let password = "password";

//check if the length of the password matches the predefined password
if (user_password != password) {
    alert(`Maybe username or password is invalid or does not match.`) //if the user input wrong password.
} else {
    alert(`Welcome ${user_name}`);//display a welcome message if the password matches.
}
