// simple queueing system using hash table (no max size)
alert("Welcome to the Customer Service Queueing System!");

let customerTable = {}; // hash table to store customers
let customerCount = 0;  // count of total customers added

let initialCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"]; // initial queue with 5 customers

// function to display the current hash table
function displayHashTable() {
    console.log("Current Customer Table:");
    if (Object.keys(customerTable).length === 0) {
        console.log("[queue is empty]");
    } else {
        for (let key in customerTable) {
            if (customerTable[key] !== null) {
                console.log(`${parseInt(key) + 1}. ${customerTable[key]}`);
            } else {
                console.log(`${parseInt(key) + 1}. [served]`);
            }
        }
    }
}

// function to add a customer
function addCustomer() {
    let name = prompt("Enter your name to join the queue (Cancel or leave empty to stop):");
    if (name) {
        let key = customerCount; // use current count as the key
        customerTable[key] = name;
        alert(`${name}, you are customer number ${key + 1}`);
        customerCount++;
        return true;
    } else {
        alert("No name entered or cancelled. Stopping customer entry.");
        return false;
    }
}

// insert predefined customers
initialCustomers.forEach(name => {
    let key = customerCount;
    customerTable[key] = name;
    alert(`${name} added as customer #${key + 1}`);
    customerCount++;
});

// allow more customers to join
while (addCustomer()) {}

// start servicing customers
while (true) {
    displayHashTable();

    let input = parseInt(prompt("Enter customer number to service (starts at 1):"));
    let index = input - 1;

    if (!isNaN(input) && customerTable.hasOwnProperty(index) && customerTable[index] !== null) {
        alert("Now serving: " + customerTable[index]);
        customerTable[index] = null;
    } else {
        alert("Invalid number or customer already served.");
    }

    // check if all customers are served
    let remaining = Object.values(customerTable).filter(val => val !== null && val !== undefined);
    if (remaining.length === 0) {
        alert("All customers have been serviced. Thank you!");
        break;
    }

    let continueService = confirm("Do you want to service another customer?");
    if (!continueService) {
        alert("Service session ended.");
        break;
    }
}
