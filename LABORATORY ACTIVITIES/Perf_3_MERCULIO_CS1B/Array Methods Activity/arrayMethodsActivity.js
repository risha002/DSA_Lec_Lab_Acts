let arr1 = ["Cecile", "Lone"]; //array 1
let arr2 = ["Emil", "Tobias", "Linus"]; //array 2
let combinedArr = arr1.concat(arr2); //use concat() to add two rays
console.log(combinedArr); //output: ['Cecile', 'Lone', 'Emil', 'Tobias', 'Linus']

//              0           1       2         3
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //use push() to add an element "Kiwi" to the array fruits
console.log(fruits); //output: ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']

let array1 = [1, 2, 3];
array1.unshift(4, 5); //use unshift() to add number 4 and 5 to the beginning of the array
console.log(array1); //output: [4, 5, 1, 2, 3]

fruits.pop(); //use pop() to remove the last element from the fruit array
console.log(fruits); //output: ['Banana', 'Orange', 'Apple', 'Mango']

let array2 = [1, 2, 3];
array2.shift(1); //use shift() to remove the first element from the array
console.log(array2); //output: [2, 3]

fruits.sort(); //use sort() to sort the fruits array alphabetically
//                                0         1          2        3
console.log(fruits); //output: ['Apple', 'Banana', 'Mango', 'Orange']

const slicedFruits = fruits.slice(2, 4); //use slice() to create a new array containing a portion of the fruits array
console.log(slicedFruits); //output: ['Mango', 'Orange']

//              0           1         2      3      4
let months = ["January",  "March", "April", "July", "May"];
months.splice(1, 0, "February"); //use splice() to insert February
months.splice(4, 1); //use splice() to remove July
console.log(months); 