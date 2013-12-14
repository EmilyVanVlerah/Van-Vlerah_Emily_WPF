//Emily Van Vlerah
//December 14th, 2013

//Functions - Basic Structure

function outputMsg(){
	console. log ("Hello World!");
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

//Functions - Function Execution

function outputMsg(){
	console. log ("Hello World!");
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

calcArea();
calcArea();
calcArea();

//Functions - Variable Scope

var width = 5;

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	//console.log(area);
}
console.log(width);
calcArea();

//Functions - Parameters and Arguments
//Sequence of the arguments and parameters is very specific, make sure they match up.
calcArea(30, 20);

function calcArea(w, h){//w=30, h=20
	var area = w * h;
	console.log(area);
}

function dogYears(age){//parameters
	var dogYears = age * 7;
	console.log("Sparky is" + dogYears = "years old.");
}
var age1 = 4
dogYears(age1);//arguments
dogYears(5);

//Functions - Returning Values

var total = calcArea(30, 20);

function calcArea(w, h){//w=30, h=20
	var area = w * h;
	return area;//function spitting the info out
}
console.log(total);

//Functions - Function vs Procedure

//this is a function
function calcAreaF(width, height){
	var area = width * height;
	return area;
}

//this is a procedure
function calcAreaP(width, height){
	var area = width * height;
	console.log(area); //no return
}





