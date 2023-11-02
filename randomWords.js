// Create an array of strings and use random() to select random entries and add them to a sentence, printing the result to the console.

var letters = ["a","e","i","o","u"];
var randomEntry = Math.floor(Math.random()*letters.length);

console.log("Y"+letters[randomEntry]+"y"+letters[randomEntry]);