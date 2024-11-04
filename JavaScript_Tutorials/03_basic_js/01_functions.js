// function myName() {
//     console.log("s");
//     console.log("h");
//     console.log("a");
//     console.log("n");
//     console.log("k");
//     console.log("a");
//     console.log("r");
// }

// myName //reference of the function
// myName(); // executive of the function
 
// function addTwoNumber(number1, number2) {
//     console.log(number1+number2)

// }

// addTwoNumber()
// addTwoNumber(4,5)


// function addTwoNumber(number1, number2) {
//     let result = number1+number2
//     return result

// }

// const result = addTwoNumber(3,5)
// console.log(result)


// function addTwoNumber(number1, number2) {
//     return number1+number2

// }

// const result = addTwoNumber(3,5)
// console.log("result:", result)


function loginUserMassage(username){
    return `${username} just logged in `
}

// console.log(loginUserMassage("shankar"))

function calculateCardPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCardPrice(200,2333,2222,22))

// const user = {
//     userName: "shankar",
//     price: 2999
// }

// function handleObject(anyObject){
    // console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`);
// }

// handleObject(user)

// handleObject({
//     userName: "swati",
//     price: 1000
// })

const myNewArr = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,300,400,500]))
