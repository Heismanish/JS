// Value and variable:
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


