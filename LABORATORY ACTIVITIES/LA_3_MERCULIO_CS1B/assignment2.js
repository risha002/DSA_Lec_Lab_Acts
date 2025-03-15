let max_limit = parseInt(prompt("Enter Limit of the Double Loop:")); //prompt the user to enter the max limit of the loops

//initialize counter
for (let i = 0; i <= max_limit; i++) {
    for (let j = 0; j <= max_limit; j++) {
        let add_value = i + j;
        console.log(`[${i}] [${j}] Addedd value is ${add_value}`);
    }
}