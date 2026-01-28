const accountId = 144553;
// accountId = 14444; // not allowed
console.log(accountId);

let accountEmail = "kritika@google.com";
accountEmail = "ks@ks.com";
console.log(accountEmail);

var accountPassword = "1234";
console.log(accountPassword);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword]);
