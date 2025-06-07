const userEmail = []

if(userEmail){
    console.log("Got the user email");
}
else{
    console.log("doesn't have user email")
}

// falsy: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy: all that is not false, "0", 'false'," ", [], {}, function(){}-empty function

// if(userEmail.length === 0 ){
//     console.log("array is empty")
// }

const emptyobject = {

}

//to detect if an object is empty or not
if(Object.keys(emptyobject).length === 0){
console.log("object is empty");

}


//Nullish Coalescing Operator (??): null undefined
//null ya undefined value aayi ho toh check for safety
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ??15

console.log(val1);


//ternary operator is diff from nullish coalescing opeartor
//condition? true: flase
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80")


