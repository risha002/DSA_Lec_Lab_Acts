let age = parseInt(prompt("Enter your age: ")); //prompt the user to enter their age

//check if the age falls into different age groups
if (age < 5) {
    console.log("You're a toddler"); //if age is less than 5, the user is a toddler
} else if (age < 13) {
    console.log("You're a child"); //if age is between 5 and 23, the user is a child
} else if (age <=  19) {
    console.log("You're a teenager"); //if age is between 13 and 19, the user is a teenager
} else if (age <= 35) {
    console.log("You're a young adult"); //if age is between 20 and 35, the user if a young adult
} else if (age <= 60) {
    console.log("You're in a middle aged"); //if age is between 36 and 60, the user is in middle age
} else {
    console.log("You're a senior"); //if age is above 60, the user is a senior
}