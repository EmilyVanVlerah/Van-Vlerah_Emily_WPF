//Emily Van Vlerah
//December 15h, 2013
//Asignment: Functions - Functions_Personal

//This will calculate how much a health potion can heal you.
//Choose to do this for personal because I love to play video games.
//This is the formula:
//HP recovered drinking one Health Potion = (50 + Level/3) to (100 + Level/3 + LUK/2 + END/2)

alert("Welcome to the Health Potion Calculator.");

var level = prompt("What is the level of your character?");
var luck = prompt("What is your character's LUK Stat?");
var endurance = prompt("What is your character's END Stat?");
var intellect = prompt("What is your character's INT Stat?");

var answerOne = calcHealthA(level);

function calcHealthA(l){
	var first = (50 + l/3)
	return first;
}

var answerTwo = calcHeathB(level, luck, endurance);

function calcHeathB(l, k, e){
	var second = (100 + l/3 + k/2 + e/2);
	return second;
}


if()

//14 comments so far
