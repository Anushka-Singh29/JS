// global scope
// var c = 300


// let a =300
// //block scope
// if (true) {
//     let a = 10
//     const b = 20
//     console.log(`the innner vale of a is ${a}`)
// }

// console.log(a)
// console.log(b)
// console.log(c)
//****************************** */
//nested scope
function one() {
    const username = "Ariadna"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website)
    //line by line execute hua, when it reached just upar wali
    //line then uske baad ka kuchh execute hua hi nahi
    two();
}

one()

if (true) {
    const username = "Sam"
    if (username === "Sam") {
        const website = " youtube"
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)
//*******************INTERESTING************************* */

//this below is a function
console.log(addone(5))
function addone(value) {
    return value + 1
}


//the below function can be said as expression
addtwo(5)
const addtwo = function(num){
    return num +2
}
//hoisting cannot be done when a function is taken as a variable
