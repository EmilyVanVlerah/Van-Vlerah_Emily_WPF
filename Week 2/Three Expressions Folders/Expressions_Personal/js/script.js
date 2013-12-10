//Emily Van Vlerah	
//November 30th, 2013	
//Assignment: Expressions - Expressions_Personal


//I need to find out the amount of dog food needed on a monthly basis.
//I will make a calculator for people to calculate the amount of dog food they need.
//This can probably be used to calculate any animal feed.

//Example:
//I will tell how much your pet eats in cups per months you put in. (You will have convert cups to pound yourself.)
//Saying that there is 4 weeks in a month, we know 7 days in a week.
//How much do I need at different months?

/*
var dailyFeeding = 1;
var consumptionAmount = 4;
var months = 6;
var amount = 1 * 4;
var monthTotal = (7 * amount) * 4;
var neededPeriod = monthTotal * months;

console.log(neededPeroid);
*/

var daysWeek = 7;
var weekMonth = 4;

var phrase = "This calculator will help you find how much your animal(s) eats in a month(s) using the unit of cups.";
alert(phrase);

var months = prompt("How many months do you wish to calculate?");
var dailyFeeding = prompt("How many times a day to you feed your animal(s)?");
var amount = prompt("How much do you feed your animal(s)?");

var first = dailyFeeding * amount;
var second = (first * daysWeek) * weekMonth;
var result = second * months;

var show = "The amount of food you animal(s) consume a month(s) is:" + " " + result + " " + "cups";
alert(show);

var message = "If you wish to recalculate, please refresh the web page.";
alert(message);





