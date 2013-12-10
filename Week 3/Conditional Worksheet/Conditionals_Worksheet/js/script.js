// Emily Van Vlerah
// Decemeber 9th, 2013
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




