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
}else if(username != user){
	console.log("User not found. Try again.");
}else if(username == user && password != passwordPrompt){
	console.log("Password does not match our records.");
}

//Tire Preasure
//This should infor the user whether htier tire pressure is good or not.

var specFront = prompt("What is the spec psi for your front tires?");
var specBack = prompt("What is the spec psi for your back tires?");

var frontLeft = prompt("What is the psi for your front left tire?");
var frontRight = prompt("What is the psi for your front right tire?");
var backLeft = prompt("What is the psi for your back left tire?");
var backRight = prompt("What is the psi for your back right tire?");


var tiresPreasure = [frontLeft, frontRight, backLeft, backRight];


if(frontLeft == specFront && frontRight == specFront){
	alert("The front tires pass spec!");
}else{
	alert("Get your front tires checked out!");
}

if(backLeft == specBack && backRight == specBack){
	alert("The back tires pass spec!");
}else{
	alert("Get your back tired checked out!");
}

//Movie Ticket Price
//This should help the user find out their ticket price for the movies.

var seniorYoungPrice = 7.00;
var regularPrice = 12.00;
var specialTimePrice = 7.00;
var specialTimeOne = 3;
var specialTimeTwo = 5;

var time = prompt("What time are you going to the movies?");
var senior = prompt("Do you have any seniors attending (55 and older)?");
var young = prompt("Do you have any young kids attending (Under 10)?");
var amount = prompt("How many people will be going that isn't under 10 and not a senior?");

if







