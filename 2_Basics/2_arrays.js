// ==============Concat arrays================
const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","batman","flash"]

marvel_heros.push(dc_heros) //push array in existing array
console.log(marvel_heros)

const newArray=marvel_heros.concat(dc_heros) //merge both in a new array but limitation is only one array can be assigned
console.log(newArray)

const newArray1=[...marvel_heros,...dc_heros] // spread operator, merge both in a new array multiple arrays can be assigned
console.log(newArray1)

//===========complex array============
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_array=another_array.flat(Infinity) //flats the complex array in one by concat, infinity is depth which auto asigns the depth
console.log(usable_array)

//convert to array
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //⭐ convert to array
console.log(Array.from({name:"hitesh"})) //⭐ gives empty array as it cant convert to array as it needs to specify that from keys or array from what to make array

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3)) //for multiple elements