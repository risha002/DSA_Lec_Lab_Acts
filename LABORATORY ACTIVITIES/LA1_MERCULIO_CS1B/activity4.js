//TASK 5: COMPARISON OR RELATIONAL OPERATORS

firstFavNumb = 2;
secondFavNumb = 5;

let greater = firstFavNumb > secondFavNumb;
let less = firstFavNumb < secondFavNumb;
let greatOrEqual = firstFavNumb >= secondFavNumb;
let lessOrEqual = firstFavNumb <= secondFavNumb;
let strict = firstFavNumb === secondFavNumb;
let loose = firstFavNumb == secondFavNumb;
let strictInequality = firstFavNumb !== secondFavNumb;
let looseInequality = firstFavNumb != secondFavNumb;

console.log(`Is ${firstFavNumb} greater than ${secondFavNumb}? ${greater}`);
console.log(`Is ${firstFavNumb} less than ${secondFavNumb}? ${less}`);
console.log(`Is ${firstFavNumb} greater or equal than ${secondFavNumb}? ${greatOrEqual}`);
console.log(`Is ${firstFavNumb} less or equal than ${secondFavNumb}? ${lessOrEqual}`);
console.log(`Is ${firstFavNumb} strict equality to ${secondFavNumb}? ${strict}`);
console.log(`Is ${firstFavNumb} loose equality to ${secondFavNumb}? ${loose}`);
console.log(`Is ${firstFavNumb} strict inequality to ${secondFavNumb}? ${strictInequality}`);
console.log(`Is ${firstFavNumb} loose inequality to ${secondFavNumb}? ${looseInequality}`);
