const score = 400

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

// console.log(typeof balance)

const othernum = 20.7658
// console.log(othernum.toPrecision(5))


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))


//****************MATH******************************

// console.log(Math);
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.sqrt(81));
// let arr = [14,42,64,58,77,86,998,432,56]
// console.log(Math.min(...arr));

// console.log(Math.random());
// console.log(Math.floor((Math.random()*10))+1);

const min =10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1 ))+ min)
//+1 taki zaero case can be avoided
// +min so that the value it more than the minimun that we have defined


