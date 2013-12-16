//Emily Van Vlerah
//December 15h, 2013
//Asignment: Functions - Functions_Personal

//This will calculate how much a health potion can heal you and mana will be regained.
//Choose to do this for personal because I love to play video games.
//This is the formula:
//HP recovered drinking one Health Potion = (50 + Level/3) to (100 + Level/3 + LUK/2 + END/2)
//MP recovered drinking one Mana Potion = (50 + Level/3) to (100 + Level/3 + LUK/2 + INT/2)

alert("Welcome to the Health and Mana Potion Calculator.");

var level = prompt("What is the level of your character?");
var luck = prompt("What is your character's LUK Stat?");
var endurance = prompt("What is your character's END Stat?");
var intellect = prompt("What is your character's INT Stat?");

var healthOne = calcHealthA(level);

function calcHealthA(l){
	var first = (50 + l/3)
	return first;
}

var healthTwo = calcHeathB(level, luck, endurance);

function calcHeathB(l, k, e){
	var second = (100 + l/3 + k/2 + e/2);
	return second;
}

var manaOne = calcManaA(level);

function calcManaA(l){
	var first = (50 + l/3);
	return first;
}

var manaTwo = calcManaB(level, luck, intellect);

function calcManaB(l, k, i){
	var second = (100 + l/3 + k/2 + i/2);
	return second;
}

if(healthOne && manaOne){
	console.log("Your HP recoverd is:" + " " + healthOne + " " + "and your MP recovered is:" + " " + manaOne + ".")
}


