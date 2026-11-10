// let a = 10;
// let b = 33.9876

// Gets  only 2 digits after decimal and return in the form of string
// Return new string no changes in value of b
// console.log(typeof b.toFixed(2))

// Gives roundoff value of b upto 3
// console.log(b.toPrecision(3))

// // Creating Number as an object
// let a = new Number(2)
// console.log(a)
// console.log(typeof a)

// Here both obj1 and obj2 have created their own memory so it's located in different places having different addresses
// let obj1 = {
//     name: "Aashish"
// }

// let obj2 = {
//     name: "Aashish"
// }

// console.log(obj1 == obj2)


// let obj1 = {
//     name: "Aashish"
// }

// let obj2 = obj1

// // Here both objects point to the same memory address so it return True
// console.log(obj1 == obj2)

// ********* Non primitive data is compared on the basis of reference ********* //
// ********* Primitive data : Compare by value 

// let a = 10;
// let b = 10;
// console.log(a==b)

// console.log(Math.abs(-2))
// console.log(Math.sqrt(2))
// console.log(Math.sign(-2))
// console.log(Math.pow(2,3))
// console.log(Math.PI)
// console.log(Math.random())  // Will generate values between 0 and 1, 0 is included but not 1

// console.log(Math.random()*10)  // Will generate values between 0 and 10, 0 is included but not 10

// console.log(Math.floor(Math.random()*10))  // Range 0 -> 9
// console.log(Math.floor(Math.random()*6)+1)  // Range 1 -> 6
// console.log(Math.floor(Math.random()*11) + 15)  // Range 15 -> 25


// OTP Generation(4 Digits):- 

console.log(Math.floor(Math.random()*9001) + 1000)  // Range 1000 -> 10000