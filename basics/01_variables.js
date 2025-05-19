const accountId = 144558
let accountEmail = "Anushka@apple.com"
var accountPw = "12345"
let accountCity;


// accountId = 3 //not allowed
accountEmail="hc@hc.com"
accountPw = "212121"
// accountCity = "sydney"

console.log(accountId)

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPw, accountCity])