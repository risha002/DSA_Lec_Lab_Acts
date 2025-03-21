let userColors = []; //empty array to store the user's fave colors

//loop 3 times to collect colors from the user
for (let i = 0; i < 3; i++) {
    let userColor = prompt("Enter a color you like: "); //prompt the user to enter a color
    //add the entered color to the userColors array
    userColors.push(userColor);
    console.log("Updated color lists: ", userColors);
}
console.log("Final color lists: ");
