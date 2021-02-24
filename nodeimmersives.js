// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1);
const lastName = getInput(2);
const fullName = firstName + ' ' + lastName;
const email = 
    firstName.toLowerCase() + 
    "." + 
    lastName.toLowerCase() + 
    "@codeimmersives.com";

console.log("Hi, " + fullName + "!");
console.log("Your name capitalized is: " + fullName.toUpperCase());
console.log("Your initials are: " + firstName[0] + "." + lastName[0] + ".");
console.log("Your Code Immersive email address is: " + email);