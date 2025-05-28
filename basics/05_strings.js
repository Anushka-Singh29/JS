const name = "Hitesh"
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('hitesh-HC')

// console.log(gameName[0])
// console.log(gameName.__proto__);


// console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf("t"));

//breaking a string, method of string

const newstring = gameName.substring(0,4)
console.log(newstring)

//negative values can be passed in slice
const anotherString =  gameName.slice(-8,4)
console.log(anotherString)

const newstringone = "      ram      "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://ram.com/ram%20dune"

console.log(url.replace('%20', '-'))

console.log(url.includes('Ram'))

//want to split string into arrays based on dash

console.log(gameName.split('-'))




