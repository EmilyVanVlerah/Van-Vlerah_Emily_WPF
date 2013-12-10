// Emily Van Vlerah
// December 7th, 2013
// Assignment: Conditionals - Conditionals_Personal

//How much Toilet paper do you use in how ever many months. 
//What you should do if they get to certain levels.
//The 30 on tpGauge is just something I thought someone really shouldn't go through in a month. Unless you are a huge numbered family.

alert("Welcome to the toilet paper calculator.");

var weekMonth = 4;
var tpGauge = 30;

var rollsUsed = prompt("How many rolls do you or your family use in a week?");
var months = prompt("How many months do you wish to calculate?");

var amount = (rollsUsed * weekMonth) * months;
var tpLevel = months * tpGauge;

var answer = "This is how many rolls you or your family goes through:" + " " + amount + " " + "Rolls";
alert(answer);

if(amount <= tpLevel){
	//will tell you that you are fine and could stock up if you wish
	alert("Based on your use, you are fine on your toilet paper level and could stock up if you wish.");
}else{
	//will tell you you're going to need toilet paper
	alert("Based on your use, you are going to need to go and get more toilet paper.");
}

alert("If you wish to recalculate, please refresh the page.");





