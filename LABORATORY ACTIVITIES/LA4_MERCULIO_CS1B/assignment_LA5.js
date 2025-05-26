/**
 * Simple Queueing System for Customer Service using a Hash Function
 * Servicing 5 customers: Elaine, Althea, Angelo, Lito, Engelbert
 * 
 * Uses console.log, prompt, and alert only.
 */

// Hash function to get index from customer name
function hashFunction(name, size) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % size;
}

// Initialize hashed table with 5 customers
const size = 5;
let hashedTable = new Array(size).fill(null);
const initialCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Insert initial customers into hashed table using linear probing for collisions
function insertCustomer(name) {
    let index = hashFunction(name, size);
    let startIndex = index;
    while (hashedTable[index] !== null) {
        index = (index + 1) % size;
        if (index === startIndex) {
            alert("Queue is full. Cannot add more customers.");
            return -1;
        }
    }
    hashedTable[index] = name;
    return index + 1; // number assigned to customer (index+1)
}

// Remove customer by number (index+1)
function removeCustomer(number) {
    let index = number - 1;
    if (index < 0 || index >= size || hashedTable[index] === null) {
        alert("Invalid number or customer already serviced.");
        return null;
    }
    let name = hashedTable[index];
    hashedTable[index] = null;
    return name;
}

// Display current hashed table
function displayHashedTable() {
    console.log("Current Queue (Hashed Table):");
    for (let i = 0; i < size; i++) {
        console.log(`${i + 1}: ${hashedTable[i] === null ? "[Empty]" : hashedTable[i]}`);
    }
}

// Initialize the queue with initial customers
for (let customer of initialCustomers) {
    insertCustomer(customer);
}

// Main program loop
function main() {
    alert("Welcome to the Customer Service Queueing System");

    // Allow a customer to enter their name and be added to the queue
    let newName = prompt("Enter your name to join the queue:");
    if (newName) {
        let assignedNumber = insertCustomer(newName);
        if (assignedNumber !== -1) {
            alert(`Hello ${newName}, you are assigned number ${assignedNumber} in the queue.`);
        }
    }

    // Service customers by number
    for (let i = 0; i < size; i++) {
        displayHashedTable();
        let input = prompt("Customer Service Representative: Enter the number to be serviced:");
        if (input === null) {
            alert("Service ended.");
            break;
        }
        let number = parseInt(input);
        if (isNaN(number)) {
            alert("Please enter a valid number.");
            i--; // retry this iteration
            continue;
        }
        let servicedName = removeCustomer(number);
        if (servicedName !== null) {
            alert(`Servicing customer: ${servicedName}`);
        } else {
            i--; // retry this iteration
        }
    }

    displayHashedTable();
    alert("All customers have been serviced or queue is empty.");
}

main();
