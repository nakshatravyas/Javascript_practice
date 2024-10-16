//filter and map return the value auto, the for each dont
const arr=[1,2,3,4,5,6,7,8,9,10]

const newNums= arr.map( (num)=>{
    return num+10
} )
// console.log(newNums)

//==========chaining - using more than 1 method at a time==========
const newNums1=arr
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
console.log(newNums1)