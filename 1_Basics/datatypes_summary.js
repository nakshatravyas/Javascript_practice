//js is a dynamic typed lang. because that variables can hold different types of values during runtime,the interpreter assigns a type to variables based on the variable's value at the time

//Two types of datatypes
//Primitive
//allocated by a copy

//7 types: string,number,boolean,null,undefined,symbol,bigInt
const score=100                     
const scoreVal=100.3

const isLogged=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')//the work of symbol is that if you pass same value then also it gives unique id
console.log(id===anotherId)

// const bigNumber=452122412454542121545121242n

//Reference (Non primitive)
//allocated by a reference

//array,objects,functions 

const heros=["shaktimaan","iron man","scooby"]

let myObj={
    name:"hitesh",
    age:52
}

const myFun=function()
{
    console.log("Hi")
}//function ka return type is function also called object function

console.log(typeof heros)

//doc - https://262.ecma-international.org/5.1/#sec-11.4.3