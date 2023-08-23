// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

// let firstLetter = myString.charAt(0).toUpperCase();
// let restOfWord = myString.substring(1);

// First Solution
let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Second Solution don't forget you can access strings like arrays
myNewString = myString[0].toUpperCase() + myString.substring(1);

// Third Solution
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;



console.log(myNewString);