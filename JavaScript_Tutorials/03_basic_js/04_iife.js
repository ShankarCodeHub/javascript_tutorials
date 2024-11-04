//Immediately Invoked  Function Expression 

(function one() {
    //named iife
    console.log("umaShankar");
})();  // Here the first parenthesis wraps the function, and the second executes it.

//IIFEs are used to create a private scope for variables and functions,
// preventing global scope pollution and enabling immediate code execution


( (name) => {
    console.log(`uma shankar ${name}`)

})("uma")