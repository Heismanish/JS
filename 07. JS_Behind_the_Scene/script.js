"use strict";
/*
function calcAge(birthYear) {
	const age = 2022 - birthYear;
	// console.log(firstName);
	function printAge() {
		let output = `You are ${age}, born in ${birthYear}.`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;
			// Creating NEW variable with the same name as outer
			// scope's variable
			const firstName = `Steven`;

			// Reassigning outer scope's variable
			output = "New ouput";

			const str = `Oh, and your are a millenial, ${firstName}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}
		//console.log(str);
		console.log(millenial); // var variables are out of block scoping
		// that is they can be accesed out of the
		// block unlike const and let variables.

		//console.log(add(1, 4)); // it will not work here,
		// but w/o strict mode it will be executed.

		console.log(output); // will return an upadated value
	}
	printAge();
	return age;
}

const firstName = "Manish";
calcAge(1991);
// console.log(age); // age variable is out of scope

// HOISTING
// console.log(me);
// console.log(job); // in the TDZ(Temporal Dead Zone) of let 'job' variable
// console.log(year);

var me = "Manish"; // var are HOISTED woth undefined
let job = "Student";
const year = 2022;

// Hoistinig with functions:
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // referenece error, can't use before initailisation.
// console.log(addArrow(2, 3)); // function not found error

function addDecl(a, b) {
	// only fun. declaration can be used before declaration.
	return a + b;
}

const addExpr = function (a, b) {
	// lies in the TDZ
	return a + b;
};

var addArrow = (a, b) => {
	// var cannot be used before declaration.
	return a + b;
};
*/

// NOTE(Example):
/*
if (!numProducts) deleteShopingCart(); // function will be executed because
// var here is undefined and
// 'undefined' is a falsy value.

var numProducts = 10;

function deleteShopingCart() {
	console.log("All product deleted!");
}

// Window object
var x = 1; // only var creates an window object
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(x === window.y); // false
console.log(x === window.z); // false
*/

// 'this' keyword
// console.log(this); // by default points to window object

const calcAge = function (birthYear) {
	console.log(2022 - birthYear);
	console.log(this); // 'undefined' coz it is not inside an object, that is, it doesn't has a owner
};
calcAge(2002);

const calcAgeArrow = (birthYear) => {
	console.log(2022 - birthYear);
	console.log(this); // arrow function don't have 'this' keyword of their own.
	// uses this keyword for it's parent scope which is window(which has a global scope)
};
calcAgeArrow(2002);

const jonas = {
	year: 2002,
	calcAge: function () {
		console.log(this); // this here points to jonas coz in * calcAge function is called by jonas
		console.log(2022 - this.year);
	},
};
jonas.calcAge(); // *

const matilda = {
	year: 2009,
};

matilda.calcAge = jonas.calcAge; // copying method from joans to matilda
matilda.calcAge();

const f = jonas.calcAge;
f(); // here this is undefined as it is called as a regualr function(like in line 103)
