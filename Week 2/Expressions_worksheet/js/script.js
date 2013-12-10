// Emily Van Vlerah
// November 30th, 2013
// Expression_worksheet

//Dog Years Problem
//Give the age that Sparky is three human years then multiply age by seven "dog years".

var humanYears = 3;
var dogYears = 3 * 7;

console.log(dogYears);


//Slice of Pie pt 1
//The party being thrown only have 8 people and to be precise a pizza should have 8 slices per pizza (Had ordered 3 pizzas). 

var people = 8;
var slices = 8;
var pizzas = 3;
var result = slices * pizzas / people;

console.log(result);


//Slice of Pie pt 2
//Since the result was 3 in the first with no slices left over. Sparky does not get any slices of pizza.

var people = 8;
var slices = 8;
var pizzas = 3;
var result = slices * pizzas / people;

var n=result.toFixed(1);

console.log(n);


//Average Shopping Bill

var week1 = 254; 
var week2 = 153;
var week3 = 167;
var week4 = 324;
var week5 = 279;

var total = week1 + week2 + week3 + week4 + week5;
console.log (total);

var average = total/5;
var n=average.toFixed(2);
console.log(n);


//Discount

var ps4originalPrice = 399.00;
var discountPercentage = 10;
var salesTax = 7;

var afterDiscount = ps4originalPrice-(ps4originalPrice * 0.10);
var withoutTax = afterDiscount;
var withTax = afterDiscount * 1.07

var n=afterDiscount.toFixed(2);
var s=withoutTax.toFixed(3);
var t=withTax.toFixed(3);

console.log(n);
console.log(s);
console.log(t);



