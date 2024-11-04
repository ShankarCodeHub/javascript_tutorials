// Create a symbol with the identifier "key"
const mySym = Symbol("key");

//object literal

// Define an object with properties name, age, email, and a symbol property using computed property [mySym]
const jsUser = {
    name: "umashankar",
    age: 18,
    [mySym]: "mykey1",  // Symbol-based property, unique to this object
    email: "shankar@google.com"  // Initial email value
};

// Update the email property of jsUser
jsUser.email = "umakashyap344@gmail.com";

// Uncommenting Object.freeze(jsUser) here would make the object immutable,
// preventing further changes to any property (existing or new)
// Object.freeze(jsUser);

// Attempt to update email again, but this will fail if Object.freeze is uncommented
jsUser.email = "kashyap344@gmail.com";

// Add a method 'greeting' to jsUser, which logs a simple message to the console
jsUser.greeting = function() {
    console.log("hello js engine");
};

// Add another method 'greeting2' that includes the object's 'name' in the message
// 'this.name' refers to the 'name' property of the current object (jsUser)
jsUser.greeting2 = function() {
    console.log(`hello js engine, ${this.name}`);
};

// Call the greeting method and log its output (which is undefined as it doesn't return anything)
console.log(jsUser.greeting());

// Call the greeting2 method and log its output (also undefined for the same reason)
console.log(jsUser.greeting2());
