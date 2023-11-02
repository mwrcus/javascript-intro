// Create a function that takes in one argument that is passed through a conditional statement. (For example, something like our haunted house door() function.) Print some resulting text to the console. Test all of your conditions to make sure you can receive all of your results back.

function weather(celsius){
	if (celsius >= 30){
		console.log("It's very hot");
	}
	else if (celsius >=15){
		console.log("It's pleasant weather");
	}
	else if (celsius >= 5){
		console.log("It's starting to get cool...");
	} else {
		console.log("It's too cold!");
	}
}

weather(1);
weather(-30);
weather(20);
weather(100);