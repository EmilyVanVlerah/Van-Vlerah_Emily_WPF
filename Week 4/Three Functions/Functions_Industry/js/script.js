//Emily Van Vlerah
//December 15h, 2013
//Asignment: Functions - Functions_Industry

//This will calculate the temperature of your computer and tell you whether it's in the danger zone or not.
//Anyone should always look up the manufacture's standards for their CPU.
//This is the formula:
//(F - 32) * 5/9 = C

var computerTemp = prompt("What is your computer's temperature in Fahrenheit?");//Made a regular function into an Anonymous function.

var calcTemp = function(F){//Only one parameter, unfortunately.
	var celsius = (F - 32) * (5/9);//Convertion from fahrenheit to celsius.
	return celsius;
}

var answer = calcTemp(computerTemp);//Figured out that I don't need a console.log for the function and to just go into the condtional to print out into the console.
 
if(answer >= 70){//If the temperature is higher than 70 degrees celsius, by most manufacture's standards, your computer is over heating.
	console.log("Your computer temperature is:" + " " + answer + " " + "Celsius. You might want to shut down your computer.");
}else if(answer >= 60){//Some CPU temps that are around 60 can still be dangerous for your computer.
	console.log("Your computer temperature is:" + " " + answer + " " + "Celsius. You getting near the danger zone.");
}else{
	console.log("Your computer temperature is:" + " " + answer + " " + "Celsius. You are doing just fine on your temperature.");
}







