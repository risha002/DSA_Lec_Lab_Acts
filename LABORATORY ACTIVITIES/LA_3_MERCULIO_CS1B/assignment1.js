//prompt the user to input their score
let score = parseInt(prompt("Enter your score: "))

//assign grades using ternary operator
let grade = score >= 97 ? "Your equivalent Grade is 1.00 Execellent" :
            score >= 94 ? "Your equivalent Grade is 1.25 Excellent":
            score >= 91 ? "Your equivalent Grade is “1.50” Above Average":
            score >= 88 ? "90: Your equivalent Grade is “1.75” Above Average":
            score >= 85 ? "Your equivalent Grade is “2.00” Average":
            score >= 82 ? "Your equivalent Grade is “2.25” Average":
            score >= 79 ? "Your equivalent Grade is “2.50” Below Average":
            score >= 76 ? "78: Your equivalent Grade is “2.75” Below Average":
            score == 75 ? "Your equivalent Grade is “3.00” Below Average":
            score >= 72 ? "Your equivalent Grade is “4.00” Poor": "Your equivalent Grade is “5.00” Poor";

//determine the final remarks using if...else...if statement
let final_remarks;
if (score >= 90) {
    console.log("HIGH PASS, Candidate for Cum Laude");
}else if (score >= 80){
    console.log("AVERAGE PASS");
}else if (score >=75) {
    console.log("LOW PASS");
}else {
    console.log("FAILED, Needs Improvement");
}

console.log(`Your equivalent gtade is: ${grade}`);
console.log(`Final Remakrs: ${final_remarks}`);
