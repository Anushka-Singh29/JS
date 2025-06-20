//for

for (let i = 0; i <= 10; i++) {
    const e =i;
    if (e == 5) {
        //console.log("5 is best number")
    }
    //console.log(e)
    
}


//table of numbers
// for (let i = 11; i <= 20; i++) {
//     console.log(`outer loop: ${i}`)
//     for (let j = 1; j <=10; j++) {
//     // console.log(`inner loop: ${j} and i value loop: ${i}`)  
//     console.log(i + '*' + j + ' = ' + i*j);
//     }
    
// }

let myarr = ["flash", "batman", "superman"]
// console.log(myarr.length);


for (let index = 0; index <= myarr.length; index++) {
    const element = myarr[index];
    // console.log(element)
}

//break and continue
for (let index = 1; index < 21; index++) {
    if (index == 5) {
        console.log("detected five!!");
        continue       
    }
   console.log(`value of i is: ${index}`);
    
}