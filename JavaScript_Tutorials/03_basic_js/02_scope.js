
const c =300 //global scope

if(true){
    let a = 10
    var b = 20
    const c =30
    // console.log("inner:", c) //block scoe
}

// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const userName = "shankar"

    function two(){
        const website = "webseries"
        console.log(userName)
    
    }
    // console.log(website)

    two()
}

one()

if(true){
    const userName = "shankar"
    if(userName == "shankar"){
        const website = " google"
        // console.log(userName + website)
    }

    // console.log(website)
}
// console.log(userName)


addOne(4)
function addOne(num){
    return num+1
}

                             //these are two method we are declare the function

addTwo(3) //hosting 
const addTwo = function(num){
    return num+2
}

