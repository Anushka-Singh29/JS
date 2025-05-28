// primitive: String, Number, Boolean, Null, 
// undefined(memory space is declared but value 
// nahi hai), Symbol(made to use value of a component
//  unique), BigInt

const score =100;
const scoreval = 100.3;

const isloggedin = false;
const temp = null;
let useremail;
console.log(useremail);

const id = Symbol('123');
const id2 = Symbol('123');
console.log(id === id2);
console.log(id);
console.log(id2);

const bigNumber = 4589928742767587673285n;
console.log(bigNumber)

// non-primitive or refrence type: Array, Onjects,
//Functions

const heroes = ["batman", "superman", "wonder-woman"]

let obj = {
    name: "anu",
    age:22
}

console.log(obj)

const myfunction = function(){
console.log("hello")
}
myfunction()

console.log(typeof heroes)
//