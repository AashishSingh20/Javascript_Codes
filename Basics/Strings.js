// const name = "Aashish"
// const repoCount = 5;

// const { use } = require("react");

// // console.log(name + repoCount + " Value");  // Not a good form nowadays instead use

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// // Another way to declare and initialize string
// const naam = new String('Aas-hi-sh');
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


// const newString = "    Aashish     ";
// console.log(newString);
// console.log(newString.trim());   // Trims extra spaces

// const url = "https://Aashish.com/aashish%3426Singh";
// console.log(url.replace('%3426', '-'));  // Replaces the desired characters 

// console.log(url.includes("Aashish"));  // Tells whether the asked keyword is in the string or not

// console.log(naam.split('-'));  // Splits the string based on the given identifier


// const str1 = "Aashish"
// const str2 = "Singh"

// const day = 20
// const str3 = `How are you ${day}`
// console.log(str3)

// const str = `Hello Aashish Singh`;
// console.log(str.length)
// console.log(str[6])

// console.log(str.toUpperCase())


// const str = `Hello Aashish Singh`;
// console.log(str.indexOf(`Aash`))  // Will return the index of 1st character
// console.log(str.indexOf(`Aahs`))  // All characters should be contiguous else will return -1
// console.log(str.indexOf(`aa`))  // Here 'a' given as small but in org string A is capital so returns -1

// console.log(str.includes("Singh"))
// console.log(str.includes("Helle"))

// ------------------------ Slice -------------------------- //
// console.log(str.slice(3,8))  // Returns between 3 and 8th index (3 included, 8 excluded) 
// console.log(str.slice(3))  // Returns everthing from 3rd index to last
// console.log(str.slice(-7,))  // Last ke chaar return kardega

// ------------------------ Substring -------------------------- //
// console.log(str.substring(2,4))  // Same as slice but we can't use -ve indexing here

// const a = "Aashish"
// const b = "Singh"

// console.log(a+" "+b)  // Concatenation

// console.log(a.replace('ashish','ASHISH'))

// const user = " Aashish Singh";
// console.log(user)
// console.log(user.trim())

// const names = "Aashish,Nakul,Rohit,Karan"
// console.log(names.split(","))

