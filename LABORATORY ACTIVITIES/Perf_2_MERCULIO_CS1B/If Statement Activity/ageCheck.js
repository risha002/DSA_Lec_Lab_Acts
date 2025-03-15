//prompt the user to enter their age
let age = parseInt(prompt("Enter your age: "));

if (age < 13 ) {
    console.log("You're a child");
} else if (age <= 19) {
    console.log("You're a teenager.");
} else {
    console.log("You're an adult");
}