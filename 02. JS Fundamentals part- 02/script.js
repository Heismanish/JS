'use strict'; //1. shows visible errors in certain situations
              //2. Restricts us from doing few things.

// let hasDriversLicense = false;
// const passTest = true;
// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can derive :D');

//const interface = 'Audio';
//const private = 534;


////////////////////////////////////////////////////////////////////// 


// Functions: Function is a value in JS and not a data type.
/*
function logger(){
    console.log('My name is Manish');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){ 
    const juice = `Juice with ${apples} apples and ${oranges} oranges,`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(3, 5));

const appleOrangeJuice = fruitProcessor(2, 4);
*/

// Function Declarations VS Expressions

// Function Declarations:
/*
function calcAge1(birthYear){
    return 2037-birthYear;
}
const age1 = calcAge1(2002); 
// a function declaration can be called before it is defined.
// while function expressions can't.

// Function Expression:
const calcAge2 =  function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(2002);

console.log(age1, age2);
*/

// Function Expression:
/*
const calcAge2 =  function (birthYear){
    return 2037 - birthYear;
}


///////////////////////////////////////////////////////////////////////////

// Arrow function: Just like a function expression but easier.

const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(2002));

const yearsUntilTheRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement  = 65 - age;
    // return statement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilTheRetirement(2002, 'Manish'));
console.log(yearsUntilTheRetirement(2003, 'Harsh'))
 */

//////////////////////////////////////////////////////////////////////////////

// Function calling other functions:
/*
function cutFruitPieces(fruit){
    return fruit *4;
} 

function fruitProcessor(apples, oranges){ 
    const applePieces = cutFruitPieces(apples);  
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples 
    and ${orangePieces} pieces of oranges,`;
    return juice;
}

console.log(fruitProcessor(2,3));

*/

//////////////////////////////////////////////////////////////////////////
/*
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilTheRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement  = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired.`);
        return -1;
    }
    
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilTheRetirement(2002, 'Manish'));
console.log(yearsUntilTheRetirement(2003,'Harsh'));
*/

///////////////////////////////////////////////////////////////////////////





