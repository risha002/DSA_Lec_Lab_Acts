let word1 = prompt("Enter a word (e.g., RACECAR):"); //prompt the user to enter a word. example: RACECAR
let word2 = prompt("Enter a word (e.g., RECORDER): "); //prompt the user to enter a word. example: RECORDER

//log to the console the original strings and the reversed stringd
function reverseString(str) {
    return str.split("").reverse().join("");
}
//reverse the strings
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

//log the console by returning the truth value if the original string is
//equivalent to the reversed string
console.log("Original word:", word1);
console.log("Reversed word 1:", reversedWord1);

console.log("Original word 2:", word2);
console.log("Reversed word 2:", reversedWord2);

//truth value
console.log("Is word 1 a palindrome?", word1 === reversedWord1);
console.log("Is word 2 a palindrome?",word2 === reversedWord2);

