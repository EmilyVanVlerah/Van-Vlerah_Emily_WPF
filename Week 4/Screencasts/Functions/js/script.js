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

calcArea();

function calcArea(){
	var area = w * h;
	console.log(area);
}



