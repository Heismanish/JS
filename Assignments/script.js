// Value and variable:
/*
const country = 'India';
const continent = 'Asia';
let population = 1350;
console.log(country);
console.log(continent);
console.log(population);

// Data Types: 
const isIsland = false;
let language;
console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));

// let, const, var: 
language = 'Hindi';
// isIsland=true;


// Basic Operators:
console.log(population/2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description = country + 
        ' is in ' + continent + ", and it's " 
        + population +' million people speak '
        +language +'.';
console.log(description)

// Strings and Template Literals
description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(description);

// Taking Decisions: if / else Statements
if(population>33){
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`);
}

// Type Conversion and Coercion
console.log('9'-'5'); 
console.log('19'-'13'+'17'); 
console.log('9'-'13'+17); 
console.log('123'-'57'); 
console.log(9+6+'4'+9-4-2); 


//Equality Operators: == vs. ===
//const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// propmpt takes input as a string
// if(numNeighbours === 1 ){
//     console.log('Only 1 border');
// }else if( numNeighbours > 1){
//     console.log('More than 1 border');
// } else {
//     console.log('No Border');
// }

// Logical Operators
if (language === 'English' && population < 50 && isIsland === false ){
    console.log(`You should live in ${country} :)`);
}else{
    console.log(`${country} does not meet your criteria :(`)
}

// The switch Statement
switch(language){
    case 'Chinese' :
    case 'Mandarin' :
                console.log('MOST number of native speakers!');
                break;
    case 'Spanish' : 
                console.log('2nd place in number of native speakers!');
                break;
    case 'English' : 
                console.log('3rd place');
                break;
    case 'Hindi' : 
                console.log('Number 4');
                break;
    case 'Arabic' : 
                console.log('5th most spoken language!');
                break;
    default: 
                console.log('Great language too :D')
}

// The Conditional (Ternary) Operator
// population > 33 ?console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is above average.`);
console.log(`${country}'s population is ${population > 33 ?'above' : 'below'} average`)
*/

// Functions
// 1.
/*
function describeCountry(country, population, capitalCity) {
	console.log(
		`${country} has ${population} million people and it's capital city is ${capitalCity}`
	);
}

const india = describeCountry("India", 8, "Delhi");
const japan = describeCountry("Japan", 1, "Tokyo");
const australia = describeCountry("Australia", 9, "Sydney");
*/

// Function declaration vs Expression
/*
const percentageOfWorld1 = function (population) {
	return (population * 100) / 7900;
};

const india = percentageOfWorld1(1500);
const japan = percentageOfWorld1(120);
const australia = percentageOfWorld1(100);

console.log(india, japan, australia);

const percentageOfWorld2 = (population) => {
	return (population * 100) / 7900;
};

const india2 = percentageOfWorld2(1500);
const japan2 = percentageOfWorld2(120);
const australia2 = percentageOfWorld2(100);

console.log(india, japan, australia);
*/

// Arrow functions
// 1.
