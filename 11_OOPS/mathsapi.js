//The question is can the value of Math.PI(or other such) which is a global constant can be changed
//if yes then why and how and if no then why

// console.log(Math.PI)
// Math.PI=5   //here we have tried to change but it is not done 
// console.log(Math.PI)

//to get info more about PI in Math module we use below property
const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor) //this give flags and in this writable is false so thats why not changing

const chai={
    name:'ginger chai',
    price:250,
    isAvail:true,
    isorder:function()
    {
        console.log('failed')
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name")) //this gives info and flags about name property in chai module

//to iterate object - for of loop and obj.entries syntax
for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function')
    {
        console.log(`${key}:${value}`)
    }
}

// changing or defining rules for name in chai
//now we cancelled write and looping of name
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

chai.name='nakshhu'
for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function')
    {
        console.log(`${key}:${value}`)
    }
}