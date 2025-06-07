//if

// const isUserLoggedIn = true
// const temp = 51

// if (temp < 50) {
//     console.log("less than 50")
// }
// else{
//     console.log(`temperature is greater than ${temp}`);

// }

//<, > , <= , >=, == , ===

// const score = 200
// if (score>100) {
//     var power = "fly"
//     console.log(`user power: ${power}`)
// } 
// else {
// }
// console.log(`user power: ${power}`)


const balance = 1000
// if (balance>500) console.log("test") //implicite scope


// if (balance < 500) {
//     console.log("less than");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200")
// }


const isUserLoggedIn = true
const debitCard = true
const loggenInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2==="2") {
    console.log("allowed to buy courses")
}

if(loggenInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}



