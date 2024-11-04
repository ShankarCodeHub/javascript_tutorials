const user  = {
    userName: "shankar",
    price: 999,

    welcomeMassage: function() {
        console.log(`${this.userName}, welcome to website`) //this (current context ko refer krta hai)
        // console.log(this)
    }

}
// user.welcomeMassage()
// user.userName =  "umaShankar"
// user.welcomeMassage()

// console.log(this) // output is {Empty} because we are node environment.


// function one(){
//     let userName = "us"
//     console.log(this.userName) //undefined
// }
// one()

// const one = function(){
//     let userName = "us"
//     console.log(this.userName) //undefined
// }

// one()
                               // arrow function and function are gives a same output
//declaration of Arrow function
const one = () => {
    let userName = "us"
    console.log(this.userName) //undefined
}

// one()

const addTwo = (num1, num2) => {
    return num1+num2
}

// console.log(addTwo(3,4))

//implicits return means no write a return function because only one line of code

// const addtwo = (num1, num2) =>  num1+num2
// const addtwo = (num1, num2) =>  (num1+num2)

const addtwo = (num1, num2) =>  ({userName: "shankar"}) //create a object in arrow function
    
console.log(addtwo(3,4))




