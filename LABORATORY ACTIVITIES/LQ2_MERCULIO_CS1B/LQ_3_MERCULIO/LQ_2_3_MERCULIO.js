//Prompt the user to enter item choice and the quantity.
let item_Choice = prompt("Enter your items:");
const QTY = parseFloat(prompt("Enter the quantity to be ordered:"));

let price = 0;
switch (item_Choice) {
    case "A":
        console.log("Pepsi Cola")
        price = 15; //set price for pepsi cola
        break;
    case "B":
        console.log("Coca Cola");
        price = 10; //set price for coca cola
        break;
    case "C":
        console.log("Apple (per kg)");
        price = 20; //set price for apple
        break;
    case "D":
        console.log("Orange (per kg)");
        price = 8; //set price for orange
        break;
    case "E":
        console.log("Hotdogs (per kg)");
        price = 10; //set price for orange
        break;
    default:
        alert("No matching Item! Try to re-run the program."); //Alert if there's no matcjing item
        //price = 0;
}

//total price is only calculated if a valid item was true
if (price > 0) {
    let ToT_Price = price * QTY; //compute the total price
    alert(`The Total Price of the order (${item_Choice}) x (${QTY}): ${ToT_Price}`);
}
