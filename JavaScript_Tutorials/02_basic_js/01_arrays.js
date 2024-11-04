//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["uma", "shankar", "priyanshu"]

const myArr2 = new Array(0,1,2,3,4,5)
console.log(myArr)
console.log(myArr[1])
console.log(myHeroes[2])

//method of array

myArr.push(6) // add the value in arrays
myArr.pop(6) // remove the last value in given arrays
console.log(myArr)

myArr.unshift(10) // in this method add the value in the  first position of given arrays
myArr.shift() //This operation modifies the original array by reducing its length by 1. 
console.log(myArr)

console.log(myArr.includes(9)) //false beacuse in this arrays no 9 included
// console.log(myArr.indexOf(9))  //output is -1 beacuse no 9 digit is included

console.log(myArr.indexOf(3)) 

const newArr = myArr.join()
console.log(newArr) // output is 0,1,2,3,4,5 & datatype is string type.

//slice &  splice

console.log("A ", myArr) //get a original value in array

const myn1 = myArr.slice(1,3)
console.log(myn1) //output is [1,2] not 3 included

console.log("B ", myArr) // as it is original array print

const myn2 = myArr.splice(1,3)
console.log("c ", myArr) // slice part is remove (manipulate the original array) done by splice array
console.log(myn2)