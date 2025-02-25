//TASK 6: STRINGS

// 1. Create variable name (favActorFirstName) & store your fav Actor name.
favActorFirstName = "Henry";

// 2. Create variable name (favActorLastName) & store the last name of (FA).
favActorLastName = "Cavill";

// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
let fullName = favActorFirstName + " " + favActorLastName;

// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
let uppercase = fullName.toUpperCase();

// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
let message = `My favorite actor is ${uppercase}`;

// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
message += ", his best show is Superman.";

// 7. Finally log all variables to the console using code runner in vscode.
console.log(`Fav actor first name: ${favActorFirstName}`);
console.log(`Fav actor flast name: ${favActorLastName}`);
console.log(`Uppercase: ${uppercase}`);
console.log(`Message: ${message}`);