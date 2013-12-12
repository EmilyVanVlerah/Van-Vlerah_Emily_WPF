// Emily Van Vlerah
// December 7th, 2013
// Assignment: Conditionals - Conditionals_Wacky

//I choose to ask the user about HP levels and the amount of HP potions they have.
//This will calculate the percentage level of your HP and tell you what you should do.
//It also tells you whether you need more HP potions or not.

alert("Welcome to the HP calculator!")

var currentHealth = prompt("What is your current HP level?");
var maxHealth = prompt("What is you Max HP level?");
var potions = prompt("How many HP potions do you have");

//This takes the users current health divides it by their max health and then times it by 100 to make sure you get your right percentage of HP.
var hpLevel = (currentHealth / maxHealth) * 100;
var n=hpLevel.toFixed(0);
var show = "This is the percent of your HP level:" + " " + n + " " + "Percent";
alert(show);

if(hpLevel >= 69 && potions >= 4){
	//Your health is fine and so is the amount of potions you have
	alert("Your health is fine and your supply of HP potions are fine as well.");
}else if(hpLevel == 50 && potions == 2){
	//Should think about drinking an potion and buying more of them.
	alert("You might want to think about drinking a potion and getting more.");
}else{
	//You should drink a potion and buy more of them.
	alert("You really should drink a potion and buy more potions.");
}

alert("If you wish to recalculate please refresh the page.")




