//Emily Van Vlerah
//December 15h, 2013
//Asignment: Functions - Functions_Wacky

//This will calculate the amount of damage a spell will do per turn
//This is the formula:
//Average Spell Damage = Resistance * (Hit Rate) * [Base + Random / 2 + (Stat Damage) * (Spell Stat) / 2] 

alert("Welcome to the Average Damage output calculator for your Spells.");

var elementalResistance = 1.30;

var hr = prompt("What is your Hit Rate?");
var base = prompt("What is the Base?");
var random = prompt("What is the Random?");
var stat = prompt("What is the Stt Damage?");
var spell = prompt("What is the Spell Stat?");

function calcSpellDamage(){
	var answer = elementalResistance * hr * [base + random/2 + stat * spell/2];
	console.log(answer "is your Average Spell Damage.");
}

good = (answer >= 500) ? "That is a good spell and you should keep it." : "That isn't such a good spell, you might want to sell it.";
console.log(good);







