"use strict";

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
