// ["", "", ""]
                //  both are Array specifices loop
// [{}, {}, {}]

/*  syntax of for of:------------
for (const element of object) {
} */

 const element = [1,2,3,4,5,6,7,8,9,10];

for (const num of element) {
    // console.log(num);
}

const greetings = "uma shankar!"

for(const greet of greetings){
    // console.log(`each char is ${greet}`)
}

// maps

const map = new Map()
map.set('IN', "india");
map.set('USA', "united state of america");
map.set('FR', "france");

// console.log(map)
for(const [key, value] of map){
    // console.log(key, ':-', value)
}

// const myObj = {
//     'u': 'uma',
//     's': 'shankar'
// }

// for(const [key, value] of myObj){
//     console.log(key, ':-', value) // TypeError: myObj is not iterable
// }