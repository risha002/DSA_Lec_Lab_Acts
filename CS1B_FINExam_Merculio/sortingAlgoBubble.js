let numbers = []; //empty array to store user input numbers
const requiredNums = [42, 25, 12, 63, 48, 10, 6, 5, 30, 78]; //array of required numbers

//loop to prompt the user to enter each number
for (let i = 0; i < requiredNums.length; i++) {
    let input = prompt(`Enter number ${i + 1} of 10 (Expected: ${requiredNums[i]}):`);
    numbers.push(parseFloat(input)); //convert input to number and add to the array
}

//function to perform Bubble sort on the array
function bblSort(arr) {
    let n = arr.length; //length of the array
    let swapped; //a flag to track if any swapping happened during a pass 

    console.log("Starting Bubble Sort...");

    for (let i = 0; i < n - 1; i++) {
        swapped = false; //reset the flag at the start of each pass

        //inner loop compared adjacent
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);

            //swap if elements are in the wrong order
            if (arr[j] > arr[j + 1]) {
                // Swap using destructuring
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
                console.log(`Swapped: ${arr[j]} and ${arr[j + 1]}`);
            }
        }

        //log the array after each pass
        console.log(`After pass ${i + 1}: ${arr}`);

        // If no elements were swapped, array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

let sortedArray = bblSort(numbers); //call the bubble sort function and store the result
console.log("Sorted array:", sortedArray); //display or print the final sorted array in the console
