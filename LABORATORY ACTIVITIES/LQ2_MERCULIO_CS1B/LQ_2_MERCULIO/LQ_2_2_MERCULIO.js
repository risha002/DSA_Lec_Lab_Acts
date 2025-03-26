//prompt the user to enter their dog breed
let dog_breed = prompt("Enter your dog breed:");
//prompt the user to enter how many times to print the dog breed
let print_count = parseInt(prompt("Enter your desired print count:")); //use parseInt() to convert string to an integer

//loop from 1 to the number entered by the user
for (let i = 1; i <= print_count; i++) {
    console.log(dog_breed); //print the dog_breed on each iteration
}
