const array1 = [1,2,3,4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator+currentValue,
    initialValue
);

// console.log(sumWithInitial)

const myNums=[1,2,3]

// const myTotal = myNums.reduce(function(acc, cv){
// console.log(`acc:${acc} and current val: ${cv}`)
//     return acc+cv;
// }, 0)

const myTotal = myNums.reduce((acc,cv)=> acc+cv, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js course",
        price: 1999
    },

    {
        itemname: "angular course",
        price: 2999
    },
    
    {
        itemname: "dsa course",
        price: 2499
    },
]

const pricetopay = shoppingCart.reduce((acc, item)=>acc + item.price , 0)
console.log(pricetopay)