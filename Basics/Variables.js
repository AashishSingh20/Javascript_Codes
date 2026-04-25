const accountId = 12345;   // accountId lock ho gayi hai change nahi hogi
let accountEmail = "aashishsingh2006@google.com";
var accountPassword = "11111"
accoutCity = "Mumbai"  // Not recommended to write like this either use let or const


/* Prefer Not to use var becuase of issue in block scope({}) and functional scope */
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accoutCity])
