//Emily Van Vlerah	
//December 3rd, 2013	
//Assignment: Expressions - Expressions_Industry

//Example in comment section below:

//Assuming that you can get all the Javascripting you need done in 2 hrs.
//Typical job has 9-5 work time, 40 hr week work time. (Say there's 4 weeks in a month)
//You take a total of an hour break a day, goes to 5 hrs a week.
//How many Javascripts can be finished in a month?

/*
var month = 1;
var workTime = 40;
var breakTime = 5;
var scriptPer = (40 - 5)/2;
var result = scriptPer * 4;

console.log(result);
*/

var weekTime = 40;


var phrase = "You are working a 40 hour week. How many Javascripts can be finished in a month(s)?";
alert(phrase);

var months = prompt("How many months do you wish to calculate?");
var rateWork = prompt("Please enter the hours required to complete a Javascript.");
var breakRate = prompt("Please enter the hours you would like to take for breaks in a week.");

var scriptPer = (weekTime - breakRate)/rateWork;
var result = scriptPer * (months * 4);

var show = "The amount of Javascripts that you will finish in a month(s) is:" + " " + result + " " + "Javascripts";
alert(show);

var message = "If you wish to recalculate, please refresh the web page.";
alert(message);




