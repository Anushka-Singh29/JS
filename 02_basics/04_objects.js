//singlertonobject
const tinder = new Object()

//non-singleton object
// const tinder  ={}

tinder.id = "123abc"
tinder.name = "sam"
tinder.isloggedin = false

// console.log(tinder)

const reguraluser = {
    emainl:'sum@gmail.com',
    fullname:{
        username:{
            firstname:"Sam",
            lastname:"Lewis"
        }
    }
}

// console.log(reguraluser.fullname?.username.firstname)

//combining objects

const object1 = {1:'a', 2:'b'}
const object2 = {3:'a', 4:'b'}

// const obj3 = {...object1, ...object2}
// const obj3 = Object.assign({}, object1, object2)
// console.log(obj3)


//when values come from db

const users = [
    {
        id:1,
        email:"h@mail.com"
    },
    {
        id:2,
        email:"k@mail.com"
    }
]

users[1].email
console.log(tinder)

console.log(Object.values(tinder));
console.log(Object.keys(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('name'))