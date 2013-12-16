//Emily Van Vlerah
//December 15h, 2013
//Asignment: Functions - Functions_Industry

//This will calculate the temperature of your computer and tell you whether it's in the danger zone or not.
//This is the formula:
//(F - 32) * 5/9 = C

var computerTemp = prompt("What is your computer's temperature in Fahrenheit?");

var calcTemp = function(F){
	var celsius = (F * 1.8) + 32;
	return celsius;
}

var answer = calcTemp(computerTemp);
 
if(answer >= 70){
	Console.log("Your computer temperature is:" + answer + "Celsius. You might want to shut down your computer.");
}






//6 Commits
