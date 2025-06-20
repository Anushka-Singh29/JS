//for of loop, array specific loop

const arr= [1,2,3,4,5]

for (const i of arr) {
    console.log(`values are ${i}`);
}

const greetings = "hello all!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

//maps
const map = new Map()
map.set('IN', "india")
map.set('UK', "United Kingdom")
map.set('FR', "France")

console.log(map);

for (const [key , value] of map) {
    console.log(key, ':', value);
    
}
//map is iterable
//to iterate objects there are different methods
const myobj = {
    'game1': 'nfs',
    'game2': 'spiderman'
}

for (const [key, value] of myobj) {
    console.log(key, " - ", value);
    
}