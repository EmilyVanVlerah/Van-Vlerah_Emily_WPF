// Expressions

var a = 2;//sets up variable a and defines it with 2
var b;
b = a + 3; //add 3 to a
console.log(a);

//Expressions - Age Example

var yearBorn = 1994;
var age = 2013 - yearBorn - 1; //My birthday is on December 2nd
console.log(age);

//Expressions - Arithmetic Operators

//area of the triangle is half of the width times the height
var width = 8;
var height = 7;
var area = width * height/2;
console.log(area);

//Expressions - Modulo Operators

var remainder = 9 % 2;
console.log(remainder);

//Expressions - PEMDAS - The Order of Opperations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//the average is the sum of the items divided by the number of items.
var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average);

var lenght = 7;
var width = 6;
var perimeter = lenght * 2 + width * 2
console.log(perimeter);

//Expressions - Expressions with Arrays

var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);

//Expressions - Expressions with Strings

var firstName = "Emily";
var lastName = "Van Vlerah";
var fullName = firstname + "" + lastName;

console.log(fullName);

var a = "6";
var b = "7";

var result = a + b;
console.log(result);

//Casting

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);

var areaCode = 517;
var firstPart = 610;
var secPart = 9064;
//(517) 610-9064
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);

//Expressions - Assignment Operators

var a = 3;
a ++ 1; //a = a + 1 // a + = 1
a --; // a = a - 1 //a -=1
console.log(a);
