function arrayOperation() {
    let numbersInput = prompt("Enter numbers sperated by comma: "); //prompt the user to input numbers seperated by comma
    let namesInput = prompt("Enter names seperated with comma: "); //prompt the user to input names seperated by comma

    let numbers = numbersInput.split(",").map(number => parseFloat(number.trim())); //convert input strings to array of numbers
    let names = namesInput.split(",").map(name => name.trim()); //convert input strings to array of names

    let mergedArray = numbers.concat(names); //merge both arrays
    console.log("Merged arrays: ", mergedArray);

    let sortNumbers = numbers.slice().sort((a, b) => b - a); //sort numbers numerically in reverse order
    console.log("Numbers sorted in reverse numerical order: ", sortNumbers);

    let sortedNames = names.slice().sort(); //sort names alphabetically
    console.log("Names sorted alphabetically: ", sortedNames);
}
arrayOperation();
