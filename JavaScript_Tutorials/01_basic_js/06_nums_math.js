const score = 400
// console.log(score)

const balance = new Number(200)
// console.log(balance)

const marks  = 123

// console.log(marks.toString.length)
// console.log(marks.toFixed(1))
// console.log(marks.toPrecision(2))

const num  = 1000000000

// console.log(num.toLocaleString()) //based on us
// console.log(num.toLocaleString('en-In')) //based on indian


// ++++++++++++++++++++++++++++++*MATH*++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) // change the sign
// console.log(Math.round(4.6)) //round off the value
// console.log(Math.ceil(4.1)) //top value  output-5
// console.log(Math.floor(4.9)) //down value output-4
// console.log(Math.max(1,2,3,4,5)) //give the max value means output is 5
// console.log(Math.min(1,2,3,4,5)) //give the min vlaue means output is 1



console.log(Math.random()) // gives value under 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1) // gives value under 1 to 9 so add +1

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1) +min))
