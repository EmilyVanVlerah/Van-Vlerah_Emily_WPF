//Emily Van Vlerah 
//December 14th, 2013
//Functions_Worksheet

//Circumference
//Calculate the circumference of a circle.

function calcCircumference(p, r){
	var circumference = (p * r) * 2;
	return circumference;
}

var total = calcCircumference(3.14, 3);

console.log("The circumference of the circle is" + " " + total);

//Stung!
//Calculate the amount of bee stings it takes to kill an certain animal.

var answer = calcStings(7920);

function calcStings(w){//parameter for the weight of the victum
	var amount = w * 8.67;
	return amount;
}

console.log("It takes" + " " + answer + " " + "bee stings to kill a rhino.");



