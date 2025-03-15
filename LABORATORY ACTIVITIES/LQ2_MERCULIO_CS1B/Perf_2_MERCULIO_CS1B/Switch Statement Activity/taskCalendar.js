//prompt the user the day of the week
let day_of_the_week = prompt("Enter a day of the week: ");

let task; //declare a variable to store the task for the given day

//use switch statement to map each day to a specific task
switch (day_of_the_week) {
    case "Monday":
        task = ("Organize notes.");
        break;
    case "Tuesday":
        task = ("Read module");
        break;
    case "Wednesday":
        task = ("Study for upcomming quizzes");
        break;
    case "Thursday":
        task = ("Workout");
        break;
    case "Friday":
        task = ("Complete pending assignments.");
        break;
    case "Saturday":
        task = ("Relax and enjoy your hobbies.");
        break;
    case "Sunday":
        task = ("Spend time with family.");
        break;
    default:
        task = ("Invalid! Please enter a valid day of the week.");
}

console.log(`Your task for ${day_of_the_week} is: ${task}`);