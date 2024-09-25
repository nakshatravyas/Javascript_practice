// --------------------------------------------Conversions------------------------------------------------------
let score="33a"

console.log(typeof score)

//string to number
let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//here the 33a which is not a pure number but then also it will be converted in number in js but seeing the value of converted is NaN (may be a issue, solution is typescript)
//string cant be converted in number gives Nan as value

console.log("---------------------------Null---------------------------------")

let score1=null
console.log(typeof score1)
//string to number
let valueInNull=Number(score1)
console.log(typeof valueInNull)
console.log(valueInNull)

console.log("---------------------------Undefined---------------------------------")

let score2=undefined
console.log(typeof score2)
//string to number
let valueInun=Number(score2)
console.log(typeof valueInun)
console.log(valueInun)

console.log("---------------------------Boolean---------------------------------")

let score3=true
console.log(typeof score3)
//string to number
let valueInbol=Number(score3)
console.log(typeof valueInbol)
console.log(valueInbol)

//"33" -> 33
//"33abc" -> NaN
//true -> 1; false -> 0
//null -> 0

console.log("---------------------------Number to Boolean---------------------------------")

let isLoggedIn=1
let boolValue=Boolean(isLoggedIn)
console.log(boolValue)

let isLoggedIn1=""
let boolValue1=Boolean(isLoggedIn1)
console.log(boolValue1)

let isLoggedIn2="hello"
let boolValue2=Boolean(isLoggedIn2)
console.log(boolValue2)

//1->true
//0->false
//""->false
//"hjdhjs"->true

console.log("---------------------------Number to String---------------------------------")

let num=33
console.log(typeof num)
//string to number
let numToString=String(num)
console.log(typeof numToString)
console.log(numToString)

// --------------------------------------------Operations------------------------------------------------------
console.log("================================Operations============================")

let value=3
let negValue=-value
console.log(negValue)

let str1="hello"
let str2=" nakshatra"
let str3=str1+str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log(1+"2"+2)
//if string first then everything in string
//if number first then calcu then convert

console.log(+true) //1
// console.log(true+) //error
console.log(+"") //0 as "" gives 0 in conversion
