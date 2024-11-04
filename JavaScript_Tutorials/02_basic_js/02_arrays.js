const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros  = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
                               //both are  gives same output. but whole array like traet like a single element
// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // use of spread operator
// console.log(all_new_heros) [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("umashankar"))
console.log(Array.from("umashankar"))

console.log(Array.from({name: "umashankar"})) // **alway output is Empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ] 