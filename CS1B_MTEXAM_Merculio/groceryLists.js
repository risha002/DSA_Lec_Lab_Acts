let grocery = prompt("Will you create a grocery lists? (y/n)"); //prompt the user if they want to create a grocery list

//check if the user wants to create a list
if (grocery === "y") {
    //ask for the nu,ber of items to be added
    let num_of_items = prompt("Enter the number of times to be registered in the grocert lists: ");
    let groceryList = [];

    //loop to collect grocery items from user input
    for (let i = 0; i < num_of_items; i++) {
        let item = prompt(`Enter item ${i +1}`);
        groceryList.push(item); //add the item to the list
    }

    let groceryList_Sorted = groceryList.toSorted(); //sorts the list alphabetically
    let groceryList_Reverse = groceryList.toReversed(); //reverse the order of the list

    //alert the original, sorted and reversed lists
    alert("Original List:" + groceryList);
    alert("Sorted List:"+ groceryList_Sorted);
    alert("Reversed List:"+ groceryList_Reverse);

}else {
    alert("No grocery list was created"); //if the user choose "n"
}
