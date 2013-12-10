//Emily Van Vlerah	
//November 30th, 2013	
//Assignment: Expressions - Expressions_Wacky


//What I choose is not too wacky but I thought it would be cool to make.
//I choose to make a Experience Point Calculator.
//The Calculator allows you to enter in time played, week span, and XP amount.

//Question is: How much XP and Gold can I gain from farming for how ever many weeks?

var daysWeek = 7;

var phrase = "Welcome to the XP Calculator! \nThis Calculator helps you figure out how much XP you get from farming.";
alert(phrase);

var experience = prompt("Please enter in the XP of the enemy.");
var gold = prompt("Please enter in the gold of the enemy.");
var playedHours = prompt("Please enter in the amount of hours you wish to play.");
var weeks = prompt("Please enter in the amount of weeks you wish to calculate for.");

var first = experience * playedHours;
var resultOne = first * (weeks * daysWeek);

var second = gold * playedHours;
var resultTwo = second * (weeks * daysWeek)

var show = "The XP you would gain in a week(s) is:" + " " + resultOne + " " + "XP \nThe Gold you would gain in a week(s) is:" + " " + resultTwo + " " + "Gold";
alert(show);

var message = "If you wish to calculate again, please refreash page.";
alert(message);


