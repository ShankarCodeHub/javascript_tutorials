const userEmail = []

if(userEmail){
    console.log("got user email")
}else{
    console.log("don't have user email")
}

//falsy value:----

// false, 0(kevin point), -0, BigInt, 0n, ""{empty string}, null, undefined, NaN(not a number).

// truthy values:-----

// "0", 'false', " ", [], {}, function(){}  

//check Array is empty
if(userEmail.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("object is empty")
}

//just for general purpose remember
/*
   false == 0  output is true
   false ==''  output is true
   0 == ''     output is true
                            */

//nullish coalescing operator (??): null undefined:--------

//The nullish coalescing operator (??) returns the right-hand operand when the 
//left-hand operand is null or undefined; otherwise, it returns the left-hand operand.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 100 ?? 20

console.log(val1)

//ternary operator

// syntax of ternary :--  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80")