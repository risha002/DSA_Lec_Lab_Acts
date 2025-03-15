//prompts the user to enter their score

let score = prompt("Enter your score: ");

let grade; //declare a variable to store the grade

//use ielse if statement to assign grades based on the criteria
if (score >=90) {
    grade = ("Excellent");
}else if (score >= 80 ) {
    grade = ("Good");
}else if (score >= 70) {
    grade = ("Fair")
}else {
    grade = ("Needs Improvement")
}

console.log(`Your grade is: ${grade}`);