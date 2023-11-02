// Create a conditional statement that compares two numbers. You can choose if those numbers will be equal ==, less than <, greater than >, less than or equal to <=, or greater than or equal to >= each other. Include an if, else if, and else statement. Create an alert() that gives feedback based on the number. Test your statement with different numbers to make sure all alerts work.

var number1 = 5;
var number2 = 5;

console.log(number1);
console.log(number2);

if (number1 > number2) {
	alert("First number is too big.");
} else if (number1 < number2){
	alert("Second number is too big.");
} else {
	alert("The numbers are equal.");
}