// // Primitive
// // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3

// const isLoggedIn = false;
// const outsideTemp = null;

// const id = Symbol('123')  // Sybol unique values to define karne ke liye use hota hai
// const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 23932635436943n;  // BigInt

// //Reference(Non-Primitive)
// // Array, Objects, Functions

// const heros = ["ShaktiMan", "Superman", "Thor"]
// let myObj = {
//     name: "Aashish",
//     age: "20",
// }

// const myFunction = function(){
//     console.log("Hello");
// }

// console.log(typeof score);     // Number
// console.log(typeof scoreValue);  // Number
// console.log(typeof isLoggedIn);  // Boolean
// console.log(typeof outsideTemp);  // Objects
// console.log(typeof id);   // Symbol
// console.log(typeof bigNumber);  // BigInt
// console.log(typeof heros);  // Objects
// console.log(typeof myObj);   // Objects
// console.log(typeof myFunction);   // function Object 


// ++++++++++++++++++++++++++++++++++++ //

// Stack (Primitive), Heap (Non-Primitive){Direct Reference}
let name = "Aashish"
let anotherName = name; // Creates another copy in stack
anotherName = "Kushal";

console.log(name);
console.log(anotherName);

let user1 = {
    email: "user1@gmail.com",
    upi: "8769965800@okhdfc"
}

let user2 = user1;  // references same email which is stored in heap

user2.email = "aashish@gmail.com";

console.log(user1.email);
console.log(user2.email);
