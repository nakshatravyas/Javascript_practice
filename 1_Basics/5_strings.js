const name="nakshatra"
const repoCount=50

// console.log(name+repoCount) //concat but old method
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //modern method is to write in backticks to do string interpolation like injecting vars or methods etc directly

const gameName=new String('nakshatra-game') //use obj in js by constructor
console.log(gameName[0])

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))
console.log(gameName.substring(0,4))
console.log(gameName.slice(0,2))

const newStr="    naksh    "
console.log(newStr)
console.log(newStr.trim()) //removes whitespaces and line breakers

const url="https://hello.com/naksh%20vyas"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(gameName.split('-')) //outputs in the form of array