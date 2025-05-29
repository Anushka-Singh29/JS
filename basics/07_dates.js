let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString('IST'));
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate)

let myCreatedDate = new Date("01-01-2025")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay().toString())

console.log(newDate.toLocaleDateString('en-IN', { weekday: 'long' }));
console.log(newDate.toLocaleString('default',{
    weekday: "short",
    timeZone: 'IST'
}))