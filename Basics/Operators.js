// // Arithematic operator

// console.log(2+4);
// console.log(2-4);
// console.log(2*4);
// console.log(2/4);
// console.log(2%4);

// console.log(2**4);

// // Assignment Operator
// let x = 30;
// let y = 40;

// x = x+y;
// console.log(x);

// // Comparison Operator
// let a = 50;
// let b = 30;

// console.log(a>b);
// console.log(a==b);
// console.log(a===b);

// let x = 20;
// let y = "20";

// console.log(x==y)  // When comparing string with number js converts string to number to compare 
// console.log(x===y)  // This is "strict check" if datatype of both are diff then it returns false

// --------------------------------- // 
//              SOME RULES           //
// --------------------------------- //

// // 1. null is loosely equal to undefined only
// console.log(null == undefined)
// console.log(null === undefined)

// // 2. >,<,<=,>=  ---> (null --> Number, undefined --> NaN)  null is considered as when using these 4 operators
// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);
// console.log(undefined>=0);
// console.log(undefined<0);

// // 3.  ASCII values are compared for characters
// console.log("Taj" > "Raj")
// console.log("Taj" > "raj")

// console.log(10>='10')
// console.log(10 == '10')

// console.log(10 >= true)
// console.log(10 > true)

// console.log(10 >= false)
// console.log(10 < false)

console.log(NaN == NaN)
console.log(null == null)
console.log(undefined == undefined)