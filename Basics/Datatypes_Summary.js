// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol('123')  // Sybol unique values to define karne ke liye use hota hai
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 23932635436943n;  // BigInt

//Reference(Non-Primitive)
// Array, Objects, Functions

const heros = ["ShaktiMan", "Superman", "Thor"]
let myObj = {
    name: "Aashish",
    age: "20",
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof score);     // Number
console.log(typeof scoreValue);  // Number
console.log(typeof isLoggedIn);  // Boolean
console.log(typeof outsideTemp);  // Objects
console.log(typeof id);   // Symbol
console.log(typeof bigNumber);  // BigInt
console.log(typeof heros);  // Objects
console.log(typeof myObj);   // Objects
console.log(typeof myFunction);   // function Object 
