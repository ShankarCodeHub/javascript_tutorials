const  temperature  =  50

if(temperature == 40){
    // console.log("temperature is equal to 50");
}
else{
    // console.log("temperature is not equal to 50");
}
// console.log("execute")

// <, >, =, <=, >=, !=, ==, !==, ===

const  score = 200

if (score > 100) {
        let power = "fly"
        // console.log(`user power: ${power}`)
}

// console.log(`user power: ${power}`) // if we use var keyword then this will gives some output.because var keyword is a  global variable.

const balance = 1000
// generally we are prefer this way.

// if(balance > 800) console.log("test"), console.log("tets2");

// nested if else

const marks = 100

if(marks < 50){
    // console.log("less than 50")
}
else if(marks < 60){
    // console.log("less than 60")
}
else if(marks < 70){
    // console.log("less than 70")
}
else{
    // console.log("less than 200")
}

const userLoggedIn  = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// check by and operator
if(userLoggedIn && debitCard){
    console.log("Allow to buy a course");
}
//check by or operator 
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow to buy a courses");
}

