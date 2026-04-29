// const name = "Aashish"
// const repoCount = 5;

// // console.log(name + repoCount + " Value");  // Not a good form nowadays instead use

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// // Another way to declare and initialize string
const naam = new String('Aas-hi-sh');
// console.log(naam);

// console.log(naam[0]);
// console.log(naam.__proto__);

// console.log(naam.length);  // Gets the length of string
// console.log(naam.toUpperCase()); // Converts all characters in the string to uppercase
// console.log(naam.charAt(4));  // Gets character at the particular index
// console.log(naam.indexOf('s')); // Gets index of the charcter(if it is repeated more than 1 times it returns index of it's 1st occ)

// const newString = naam.substring(1,4); // Gives characters between index 1 to 4(include 1, exclude 4)
// console.log(newString);
 
// const anotherString = naam.slice(-3,5);  // Here we can give -ve values but not in substring 
// console.log(anotherString);


const newString = "    Aashish     ";
console.log(newString);
console.log(newString.trim());   // Trims extra spaces

const url = "https://Aashish.com/aashish%3426Singh";
console.log(url.replace('%3426', '-'));  // Replaces the desired characters 

console.log(url.includes("Aashish"));  // Tells whether the asked keyword is in the string or not

console.log(naam.split('-'));  // Splits the string based on the given identifier

