//singleton: whenever aan object is made froma  constructor
//whenever literals ke tarah an object is declared then singleton is not made

const mysym = Symbol("key1")

// Object.create
//symbol to be defined, added in obj and used as key
const jsuser = {
    name: "ariadna","full name":"ari lewis",
    age:18,
    [mysym]:"mykey1",
    location:"New York",
    email:"aria@google.com",
    isLoggedIn: false,
    lastlogindays:['monday', 'saturday']
}

// console.log(jsuser.email)


// console.log(jsuser["full name"])
// console.log( jsuser[mysym])


// Object.freeze(jsuser)
jsuser.email = "ari@gpt.com"
// console.log(jsuser['email'])

// console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsuser.greeting())
console.log(jsuser.greeting2())
