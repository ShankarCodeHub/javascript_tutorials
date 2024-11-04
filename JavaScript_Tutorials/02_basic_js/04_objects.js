// const tinderUser = new Object() //this is singleton object
// Create an object using object literal syntax, which is non-singleton
const tinderUser = {};

// Add properties to the tinderUser object
tinderUser.id = "123abc";  // Setting unique ID
tinderUser.name = "umaShankar";  // Setting name
tinderUser.isLoggedIn = false;  // Boolean indicating login status

// Display tinderUser object with properties
// console.log(tinderUser);

// Define another object, regularUser, with nested properties
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "uma",
            lastName: "shankar"
        }
    }
};

// Access and log the lastName of regularUser's nested structure
// console.log(regularUser.fullName.userFullName.lastName);  // Outputs: "shankar"

// Define multiple objects with similar key-value pairs
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 5: "b" };  // Duplicate key '5' will be overwritten

// Merge obj1, obj2, and obj4 using the spread operator; {} ensures new object creation
const obj3 = { ...obj1, ...obj2, ...obj4 };  // Spread operator (best practice for merging)
// console.log(obj3);  // Outputs merged object with unique keys and last value for duplicate keys

// Create an array of user objects, representing different users with properties
const user = [
    {
        id: 2,
        email: "u@gmail.com"
    },
    {
        // Empty user object
    },
    {
        // Another empty user object
    }
];

// Access the email property of the second user (index 1)
// console.log(user[1].email);  // Outputs: undefined, as the second user is an empty object

// Corrected usage of Object methods to get keys, values, and entries of tinderUser
// console.log(Object.keys(tinderUser));  // Access keys of the tinderUser object
// console.log(Object.values(tinderUser));  // Access values of the tinderUser object
// console.log(Object.entries(tinderUser));  // Access entries (key-value pairs) of tinderUser



const course = {
    courseName: "dsaWithJava",
    price: 1000,
    courseInstructor: "uma"
}

// console.log(course.courseName) //bad practice to use 

const {courseName} = course
console.log(courseName)