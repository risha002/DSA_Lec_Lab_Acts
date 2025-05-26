function multiDimensionalArray () {
    let namesInput = prompt("Enter names separated by comma: "); //prompts the user to enter names separated by comma
    let agesInput = prompt("Enter ages separated by comma: "); //prompts the user to enter ages seperated by comma

    //convert the input strings into arraus
    let subArray1 = namesInput.split(",").map(name => name.trim());
    let subArray2 = agesInput.split(",").map(age => parseInt(age.trim()));

    let originalArray = [subArray1, subArray2]; //create the original multi-dimensonal array

    //restructure into new array
    let restructuredArray = [];
    for (let i = 0; i < subArray1.length; i++) {
        restructuredArray.push([subArray1[i], subArray2[i]]);
    }

    //log each [name, age] pair on a new line
    console.log("Restructured [name, age] array: "); 
    restructuredArray.forEach(pair => {
        console.log(pair);
    });

}
multiDimensionalArray(); //call the function
