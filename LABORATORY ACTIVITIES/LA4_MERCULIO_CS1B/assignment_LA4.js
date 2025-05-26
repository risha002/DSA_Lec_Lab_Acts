// Simple Queueing System for Customer Service
// Initial queue with 5 customers
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to display the current queue in console
function displayQueue() {
    console.log("Current Queue:");
    if (queue.length === 0) {
        // If queue is empty, show message
        console.log("(Queue is empty)");
    } else {
        // List all customers with their queue number
        queue.forEach((customer, index) => {
            console.log((index + 1) + ". " + customer);
        });
    }
}

// Function to add a new customer to the queue
function addCustomer() {
    // Prompt user to enter their name
    let name = prompt("Enter your name to join the queue (Cancel or empty to stop):");
    if (name) {
        // Add the new customer to the queue
        queue.push(name);
        // Notify the customer of their position in the queue
        alert("Hello " + name + "! You are number " + queue.length + " in the queue.");
        return true; // Indicate a customer was added
    } else {
        // Notify if no name was entered or prompt was cancelled
        alert("No name entered or cancelled. Stop adding customers.");
        return false; // Indicate stop adding customers
    }
}

// Function to service a customer by number
function serviceCustomer() {
    if (queue.length === 0) {
        // If queue is empty, notify and stop servicing
        alert("The queue is empty. No customers to service.");
        return false;
    }
    // Prompt for the customer number to service
    let number = parseInt(prompt("Enter customer number to be serviced:"));
    let index = number - 1;

    if (index >= 0 && index < queue.length) {
        // Get the customer's name
        let served = queue[index];
        // Notify which customer is being served
        alert(`Now serving: ${served}`);
        // Remove the customer from the queue
        queue.splice(index, 1);
        console.log("Updated Customer Queue:");
        //displayQueue();
        return true; // Continue servicing
    } else {
        // Notify invalid number entered
        alert("Invalid number.");
        return true; // Continue even if invalid input
    }
}

// Main program flow
// Welcome message
alert("Welcome to the Customer Service Queueing System!");

// Display initial queue
displayQueue();

// Loop to add customers until user cancels or enters empty
while (addCustomer()) {
    // Keep asking to add customers
}

// Loop to service customers until queue is empty or user cancels
while (queue.length > 0) {
    // Show current queue
    displayQueue();
    // Service a customer
    let cont = serviceCustomer();
    if (!cont) break;

    // Ask if want to service another customer
    let again = confirm("Do you want to service another customer?");
    if (!again) break;
}

// End message
alert("Thank you! Service ended.");
