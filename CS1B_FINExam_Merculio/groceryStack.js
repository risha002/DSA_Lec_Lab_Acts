let groceryStack = []; //initalize an empty array to represent the stack

//function to check the top item of the stack without removing it
function peek() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty");
        return null; //return null when no items in stack
    } else {
        let topItem = groceryStack[groceryStack.length - 1]; //get the last item
        console.log("Top item (peek):", topItem);
        return topItem;
    }
}

//function to add new item to the top of the stack
function push(item) {
    groceryStack.push(item); //add item to the end of the array
    console.log(`Pushed: ${item}`); //log the pushed item
    peek(); //show the current top item after pushing
    console.log("Current Stack:", groceryStack); //log the full stack
}

//function to remove the top item from the stack
function pop() {
    if (groceryStack.length === 0) {
        console.log("stack is empty"); //if stack is empty the console will print "stack is empty"
    }else {
        let removed = groceryStack.pop(); //remove the last item
        console.log(`Popped: ${removed}`); 
        peek(); //show the new top item after popping
        console.log("Current stack", groceryStack); //log the updated stack
    }
}

//ask the user to input 5 grocery items and push each onto the stack
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`); //prompt for grocery item
    push(item); //add each item to the array
}

pop(); //remove the top item from the stack once
