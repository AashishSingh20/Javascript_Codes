// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23);  //YYYY,M,DD
// let myCreateDate = new Date(2023, 0, 23, 5, 3);  // YYYY, M, DD, Hr, Min
// let myCreateDate = new Date("2023-04-19");
let myCreateDate = new Date("04-19-2023");
// console.log(myCreateDate.toLocaleString());

// Time
// let myTimeStamp = Date.now();  // Gets time in milliseconds
// console.log(myTimeStamp);

// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // Gets time in seconds 

let newDate = new Date();
console.log(newDate);

newDate.toLocaleString('default',{
    weekday: "long"
})