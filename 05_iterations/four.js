const myobject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

//for in loop for objects

for (const key in myobject) {
//    console.log(`${key} is shortcut for ${myobject[key]}`);
}

const progarmming = ['js', 'java', 'cpp', 'ruby', 'go']
for (const key in progarmming) {
//   console.log(progarmming[key]);
  
}


//map is not iterable this way using for in loop
// const map = new Map()
// map.set('IN', "india")
// map.set('UK', "United Kingdom")
// map.set('FR', "France")

// for (const key in map) {
// console.log(map[key]);
// }


