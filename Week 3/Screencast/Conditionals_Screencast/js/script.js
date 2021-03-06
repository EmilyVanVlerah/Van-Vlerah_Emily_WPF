//Conditional Logic

var oldEnough = false;

//if the child is old enough, print to the console "You can ride!"
if(oldEnough){
	//code performed if condion is true.
	console.log("You can ride the coaster!");
}
console.log("What comes after?");

//Conditional Logic - Relational Expressions

var kidHeight = 50;
var minHeight = 48;

//if the child is old enough, print to the console "You can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//code performed if condion is true.
	console.log("You can ride the coaster!");
}

//Conditional Logic - With an Expression

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2:

//if the child is old enough, print to the console "You can ride!"
//if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
	//code performed if condion is true.
	console.log("You can ride the coaster!");
}

//Conditional Logic - With an Expression (If and else)

var kidHeight = 52;
var minHeight = 48;

//if the child is old enough, print to the console "You can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//code performed if condion is true.
	console.log("You can ride the coaster!");
}else{
	//code performed if condion is false.
	console.log("Sorry kid, you've got some growing to do first!");
}

//Conditional Logic - else if

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "You can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//you can ride
	console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
	//you can ride with a parent present
	console.log("You can ride, but only with a parent present.");
}else{
	//sorry you have growing to to
	console.log("Sorry kid, you've got some growing to do first!");
}

//Conditional Logic - Logical Operators

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the price of the phone is less than our buget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
	console.log("We can buy the phone.");
}else{
	console.log("No phone for you!!");
}

//the OR Operator (Same video for the AND)

var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our buget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
	console.log("We can buy the phone.");
}else{
	console.log("No phone for you!!");
}

//Conditional Logic - Ternary Operators
/*
if(condition){
	do if true;
}else{
	do if false;
}

(condition) ? do if true : do if false;
*/

var gpa = 48;

//if the GPA is over the min 2.0 score, the student can graduate
/*if(gpa > 2.0){
	Console.log("You can graduate!");
}else{
	console.log("GPA is too low!");
}*/

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");


var age = 11;
var book;

//If child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
/*if(age < 10){
	book = "Green Eggs and Ham";
}else{
	book = "The Time Machine";
}
console.log(book);
*/

book = (age < 10) ? "Grean Eggs and Ham" : "The Time Machine";
console.log(book);













