//Emily Van Vlerah
//December 15h, 2013
//Asignment: Functions - Functions_Wacky

//This will calculate the amount of damage a spell will do per turn
//This is the formula:
//Average Spell Damage = Resistance * (Hit Rate) * [Base + Random / 2 + (Stat Damage) * (Spell Stat) / 2] 

alert("Welcome to the Average Damage output calculator for your Spells.");
//The standard elemental resistance that is used to calculate the average Damage output for spell is 130 percent.

var hit = prompt("What is your Hit Rate?");
var base = prompt("What is the Base?");
var random = prompt("What is the Random?");
var stat = prompt("What is the Stat Damage?");
var spell = prompt("What is the Spell Stat?");

var print = calcSpell(hit, base, random, stat, spell);

function calcSpell(h, b, r, d, s){
	var elementalResistance = 1.30;
	var answer = elementalResistance * (h/100) * [b + r/2 + d * s/2];
	return answer;
}

if(print >= 500){
	console.log("That spell's damage per turn is" + " " + print + ". You should keep and use that spell.");
}else{
	console.log("That spell's damage per turn is" + " " + print + ". You should sell that spell.");	
}






