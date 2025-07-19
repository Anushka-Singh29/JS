// const promiseOne = new Promise((resolve, reject) => {
//     //DO an async task: DB calls, cryptography,network
//     setTimeout(function () {
//         console.log("async task is complete");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log('promise consumed');

// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('async task 2');
//         resolve();
//     }, 1000)
// }).then(function () {
//     console.log('promise 2')
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve({ username: "Que", email: "que@example.com" })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user)
// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "anushka", password: "12345" })
//         }
//         else {
//             reject('ERROR: somth weny wrong')
//         }
//     })
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username

// }).then((username) => {
//     console.log(username)
// }).catch(function (e) {
//     console.log(e)
// }).finally(function () {
//     console.log("Promise is either resolved or rejected")
// })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "anushka", password: "12345" })
        }
        else {
            reject('ERROR: something went wrong')
        }

    }, 1000)
})

async function consumepromiseFive(params) {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// consumepromiseFive()

// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//      console.log("e:", error)
//     }
// }

// getAllusers()


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((e) => {
        console.log(e);

    })