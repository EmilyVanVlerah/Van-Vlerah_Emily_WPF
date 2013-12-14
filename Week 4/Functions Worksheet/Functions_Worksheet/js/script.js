//Emily Van Vlerah 
//December 14th, 2013
//Functions_Worksheet

//Circumference
//Calculate the circumference of a circle.

var calcCircumference = function(p, r){//defining 
	var circumference = (p * r) * 2;
	return circumference;
}

var total = calcCircumference(3.14, 3);//invoking 

console.log("The circumference of the circle is" + " " + total);

//Stung!
//Calculate the amount of bee stings it takes to kill an certain animal.
//A rhino can weight a max of 7,920 lbs.
var answer = calcStings(7920);

function calcStings(w){//parameter for the weight of the victum
	var amount = w * 8.67;
	return amount;//return the number of bee stings it takes to kill a rhino.
}

console.log("It takes" + " " + answer + " " + "bee stings to kill a rhino.");



