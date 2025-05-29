const marvelHeroes = ['spiderman', 'ironman', 'black widow']
const dc = ['superman', 'flash', 'batman']

// marvelHeroes.push(dc)

// console.log(marvelHeroes)
// console.log(marvelHeroes[3][1])

// const all = marvelHeroes.concat(dc)
// console.log(all)

const allnewheroes = [...marvelHeroes, ...dc]
// console.log(allnewheroes)
 

const anotherarr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const realanotherarr = anotherarr.flat(Infinity)
console.log(realanotherarr)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"ram"})) //exception and interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));