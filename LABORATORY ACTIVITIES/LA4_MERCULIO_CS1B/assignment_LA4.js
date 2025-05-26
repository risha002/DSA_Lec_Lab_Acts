// Simple Queueing System for Customer Service
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"]; // initial queue with 5 customers

// function to display the current queue in console
function displayQueue() {
    console.log("Current Queue:");
    if (queue.length === 0) {
        console.log("(Queue is empty)"); //if queue is empty, show message
    } else {
        // list all customers with their queue number
        queue.forEach((customer, index) => {
            console.log((index + 1) + ". " + customer);
        });
    }
}

//Function to add a new customer to the queue
function addCustomer() {
    let name = prompt("Enter your name to join the queue (Cancel or empty to stop):"); // get user input
    if (name) {
        queue.push(name); //add the new customer to the queue
        alert("Hello " + name + "! You are number " + queue.length + " in the queue."); //notify the customer of their position in the queue
        return true; //indicate a customer was added 
    } else {
        alert("No name entered or cancelled. Stop adding customers."); //if no name
        return false; //stop adding customers
    }
}

//Function to service a customer by number
function serviceCustomer() {
    if (queue.length === 0) {
        alert("The queue is empty. No customers to service."); //notify and stop servicing if the queue is empty
        return false;
    }
    let number = parseInt(prompt("Enter customer number to be serviced:")); //prompt the user for the customer number to service
    let index = number - 1;

    if (index >= 0 && index < queue.length) {
        let served = queue[index];
        alert(`Now serving: ${served}`); //notify wich customer is being served
        queue.splice(index, 1); //remove the customer from the queue
        console.log("Updated Customer Queue:");
        return true; // Continue servicing
    } else {
        alert("Invalid number."); //notify if invalid number entered
        return true; // Continue even if invalid input
    }
}

alert("Welcome to the Customer Service Queueing System!");

displayQueue(); //display the initial queue

// oop to add customers until user cancels or enters empty
while (addCustomer()) {
    //keep asking to add customers
}

// Loop to service customers until queue is empty or user cancels
while (queue.length > 0) {
    displayQueue(); //show current cue
    let continueService = serviceCustomer();
    if (!continueService) 
        break; //stop servicing if user cancels

    let askAgain = confirm("Do you want to service another customer?"); //ask if the user want to service another customer
    if (!askAgain) 
        break; //stop servicing if user cancels
}

alert("Thank you! Service ended.");
