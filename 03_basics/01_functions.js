function saymyname() {
    console.log("hi")
    console.log("hi")
    console.log("hi")
}

// saymyname

//parameters
// function addtwo(num1, num2) {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         console.log(num1 + num2)
//     }
// }

// function addtwo(num1, num2) {
//    return num1+num2
// }

// //arguments
// const result = addtwo(3, 5)

// console.log("Result:" ,result)

//aur kya kya tareeke se value le skte hia

function loginusermessage(username){
    if (username === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("Anna"))
// console.log(loginusermessage())

//rest operator
function calculateCartPrice(...num){
return num

}

// console.log(calculateCartPrice(200,400,890))

const user={
    username:"ari",
    price:199
}

function handleObject(anyobject){
console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"SAM",
    price:399
})

const mynewarr = [1,2,3,4,6,78,100]

function returnsecondvalue(getarrr){
    return getarrr[6]
}

console.log(returnsecondvalue(mynewarr))