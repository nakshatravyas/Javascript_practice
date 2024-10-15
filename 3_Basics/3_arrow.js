const user={
    username:"nakshu",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.username}, how are you?`)
        console.log(this) //we can use this to refer current reference in object only
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this)//here this is empty object but in browser the global object is window object

// =========================================all 3 types of functions==========================================================================

function chai()
{
    let username="hitesh"
    console.log(this.username) //in function we cant use this to refer current reference
}
chai()

const chai1=function()
{
    let username="hitesh"
    console.log(this.username) //in function we cant use this to refer current reference
}
chai1()

const chai2=()=>{
    let username="hitesh"
    console.log(this) //in arrow function we cant use this only
}
chai2()

//⭐ diff between normal function and arrow function

// ===========================Arrow function================================================

const add=(num1,num2)=>{
    return num1+num2                //if we wrap in curly bracket then return is req. to be written
}
const add1=(num1,num2)=>(num1+num2) //if we not wrap in curly bracket, we wrap in round bracket then return is not req. to be written
console.log(add(5,6))
console.log(add1(5,6))