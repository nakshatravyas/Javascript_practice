//⭐mixed datatypes can be there in js
//⭐resizeable
//⭐on copy operations in array shallow copy (same ref) occurs
const myArray=[0,1,2,3,4,5,6]
const myHeros=["shaktiman","nagraj"]
console.log(myArray[0])

const arr2=new Array(1,2,3,4)
console.log(arr2[0])

//=======================Methods=============================
console.log("=========methods============")
arr2.push(6)
console.log(arr2)

arr2.pop()
console.log(arr2)

arr2.unshift(9) //adds in front but it gives load on machine
console.log(arr2)
arr2.shift() //removes from front
console.log(arr2)

console.log(arr2.includes(9))
console.log(arr2.indexOf(3))

const newArr=arr2.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(arr2)
console.log(newArr)
console.log(typeof (newArr))

//⭐ =========slice,splice============
console.log("=========slice,splice============")

console.log("A ",arr2)
const myn1=arr2.slice(0,3) //⭐ it does not removes the elements it do not manipulate the array
console.log(myn1)
console.log("B ",arr2)

console.log("A ",arr2)
const myn2=arr2.splice(0,3) //⭐ it manipulates the array by removing the elements from it
console.log(myn2)
console.log("B ",arr2) 