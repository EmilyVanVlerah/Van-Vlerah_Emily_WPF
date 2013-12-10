// Emily Van Vlerah
// Decemeber 10th, 2013
// Conditionals Worksheet

//Stuff You Face I
// The weight I choose to work with is 369 lbs. The competitor should be qualified to compeat.

var mustWeigh = 250;
var competitorWeight = 369;

if(competitorWeight >= mustWeigh){
	//if the competitor weighs more or is equal to 250 lbs
	console.log("The competitor qualifies for the heavyweight division");
}else{
	//if the competitor doesn't weigh more or is equal to 250 lbs
	console.log("The competitor needs to gain some weight!");
};

//Celsius to Fahrenheit converter
//The user will be able to put in information to convert Celsius to Fahrenheit or vise versa.

var celsius = "C";
var fahrenheit = "F";

var unitInput = prompt("Which would you like to convert to, Fahrenheit or Celsius. \n(Please use the letter C or F.)");
var temperature = prompt("What is the temperature that you wish to convert?");

if(unitInput == celsius){
	var celsiusConvert = (temperature * 1.8) + 32;
	var showFahrenheit = "Your answer is:" + " " + celsiusConvert + " " + "Fahrenheit.";
	alert(showFahrenheit);
}else{
	var fahrenheitConvert = (temperature - 32) * 1.8;
	var showCelcius = "Your answer is:" + " " + fahrenheitConvert + " " + "Celsius."
	alert(showCelcius);
}

//Last Chance for Gas!
//The user will be able to tell whether they should stop for fuel or not.

var mpg = prompt("How much is your mpg?");
var gaugeReading = prompt("What is the percentage of the fuel remaining?");
var tankCapacity = prompt("How much gas does your car hold?");

var first = tankCapacity * (gaugeReading/100);
var answer = first * mpg;

if(answer >= 200){
	alert("You can make it without stopping for gas!");
}else{
	var show = "You have" + " " + first + " " + "gallons of gas in your tank, you better get gas now while you can.";
	alert(show);
}

//Grade Letter Calculator
//This will tell the user the letter grade of their last class.

var grade = prompt("What was your grade in your last class?");

if(grade >= 90){
	console.log("You have a" + " " + grade + "%, which means you have earned a(n) A in the class!");
}else if(grade >= 80){
	console.log("You have a" + " " + grade + "%, which means you have earned a(n) B in the class!");
}else if(grade >= 73){
	console.log("You have a" + " " + grade + "%, which means you have earned a(n) C in the class!");
}else if(grade >= 70){
	console.log("You have a" + " " + grade + "%, which means you have earned a(n) D in the class!");
}else{
	console.log("You have a" + " " + grade + "%, which means you have earned a(n) F in the class!");
}

//Check the Login
//This should print out a message to the user in the console telling the user whether their password and or user is correct or not.

var user = "student@fullsail.edu";
var password = "2013";

alert("Your username is:" + " " + user + "\nYour password is:" + " " + password);

var username = prompt("Please enter in your username here:");
var passwordPrompt = prompt("Please enter in your password here:");

if(username == user && password == passwordPrompt){
	console.log("Welcome" + " " + user);
}





