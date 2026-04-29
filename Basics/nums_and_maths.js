/* **************  NUMBER ************** */
// const score = 300

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());  // Changes Number to String
// console.log(balance.toFixed(2));  // Number of Places after decimal

// const otherNumber = 203.847;
// console.log(otherNumber.toPrecision(3));  // Round of to 3 number before decimal

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // Adds commas accordinly on it's own and converts into string


/* ************** MATHS **************** */
// console.log(Math);
// console.log(Math.abs(-2));  // Converts -ve value to +ve value

// console.log(Math.round(6.5));  // Used to Round off (>= .5 next whole number, < .5 previous whole number)

// console.log(Math.ceil(4.2)); // Always takes next whole number to round off
// console.log(Math.floor(4.8)); // Always takes previous whole number

// console.log(Math.min(2,5,8,1));
// console.log(Math.max(2,5,8,1));

// console.log(Math.random());  // Gives Random values between 0 and 1
// console.log(Math.floor(Math.random()*10) + 1); 

const min = 10;
const max = 20;

// We Added Min at last because we are using floor(min se kam ho sakta hai so use min)
console.log(Math.floor(Math.random() * (max-min + 1) + min)) ;