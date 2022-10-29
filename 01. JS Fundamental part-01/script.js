/*
let js = "amazing";
console.log(40+32+43-23);

console.log('Jonas');
console.log('43');

let firstName = "Manish";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// naming convention
let manish_gupta="mg";
let name = "Jonas"; // here name is a reserved keyword still legal to use for naming a variable 
                    // but, make sure not to use it to name a variable

let PI = 3.1415; // variable name in all capital are reserved for constants
let SI = "king";


let myFirstJob = "Programmer";// use descriptive variable name
let mySecondJob = "Teacher";

let job1 = "Programmer"; // doesn't make much sense
let job2= "Teacher";

console.log(myFirstJob);


true;
javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof 'Manish');
console.log(typeof 43);

javaScriptIsFun = 'Manish';  // here comes dynamic nature of js in play.
console.log(typeof javaScriptIsFun);

let anime;
console.log(typeof anime ) ;

// here is an error that has not been resolved coz of legacy reason 
console.log(typeof null ) ; // it gives an object but should be null.
*/

/*
// Ways of Defining variables: 
// 1. 
let age = 30;
age = 21; // here mutation is possible

// 2.
const birthYear = 2002;
//birthYear = 2003; // here mutation is illegal
//const job; also a variable can't go un initialised.

// 3. Actually not used these days but important for legacy reasons.
var job = 'programmer'; 
job = 'teacher';  

console.log(job);


// this is legal but a really bad practice
// lastName = 'Gupta';
// console.log(lastName); 


// MATH OPERATORS: 
const now = 2030;
const ageManish = now-2002;
const ageDikshika = now-2003;
console.log(ageManish, ageDikshika);

console.log(ageManish*0.5, 2*ageDikshika, 2**5);
// 2**5 = 2 to the power of 5.

//Strings can be concatenated using "+" operator
const firstName = 'Manish';
const lastname = 'Gupta';
console.log(firstName+" "+lastname); 

// 'tyopeof' is also an operator 
let anime = 'Demon Slayer';
console.log(typeof anime );

// Assignment Operators:
let x = 10+5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x+1
x--; // x = x-1
console.log(x);

// COMPARISON OPERATORS: 
console.log(ageManish >= ageDikshika);// >, <, >=, <=
console.log(ageManish <= 18);

const isAgeSame = ageManish >= ageDikshika;
console.log(isAgeSame);
console.log(now - 1991 > now -2018);
*/

// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
/*
const now = 2030;
const ageManish = now-2002;
const ageDikshika = now-2003;

console.log(now - 1991 > now -2018);

let x,y;
x = y =  25 - 10 - 5; // x = y = 10, x = 10

const avgAge = (ageManish+ageDikshika)/2;
console.log(ageManish,ageDikshika, avgAge);
*/  

// STRINGS
/*
const firstName = 'Manish';
const job = 'Student';
const birthYear = 2002;
const year = 2022;

const manish = "I'm "+firstName+', a ' + (year - birthYear) + ' years old ' + job+'!'; 
// here we can see strings getting concatenated with numbers which is due to type coersion in js.
console.log(manish);

// Template Literals (An ES6 feature)
const manishNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(manishNew);

// Writing multiple lines in String: It actually works due to a bug that the language has.
console.log('String with \n\
multiple \n\
lines');

// OR - Using backticks `_`

console.log(`String with
multiple 
lines`);
*/

// CONDITIONAL STATEMENTS:
// const age = 17;
// if (age >= 18){
//     console.log(`Manish can start driving license`);
// }  else{
//     console.log(`Manish is too young. Wait another 
//     ${18-age} years.`);
// }

// const birthYear = 2033;
// let century;
// if (birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century)