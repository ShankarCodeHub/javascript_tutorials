const name = "shankar"
const repoCount  = 100

console.log(name + repoCount) // not recommended

console.log(`hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String('umashankar')

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))
console.log(gameName.substring(0,4))
console.log(gameName.slice(-8,4)) //negative value also consider slice method

const String = "   shankar   "
console.log(String)
console.log(String.trim())