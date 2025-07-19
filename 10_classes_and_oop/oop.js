const user = {
    username: "Anushka",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from DB");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.getUserDetails());
console.log(this) //global context of 'this'

//constructor function ↓
//new keyword is a contructor function
//new keyword created a new executional context

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this //implicitely defined

}

const userOne = new User("anuhska", 10, true)
const userTwo = new User("js", 11, false)

//while we make another user, the console statemnet will then override the userOne and give us output as userTwo, to battle this we neec diff context given by the 'new' keyword
/* As sson as new keyword is used, 
1.new object is created
2.Constructor function is called because of new keyword, all arguments are packed
3. all the arguments that were packed are added in this keyword


*/
// console.log(userOne)
// console.log(userTwo)

function multiply(num) {
    return num * 5;
}

multiply.power = 2
multiply(5)

console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype)

//method nahi kuchhproperties bhi deta hai

function createUser(username, score) {
    this.username = username;
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea =  new createUser("tea", 250)

chai.printMe()
