//⭐two types to make
//1)singleton- if made from constructor then it is singleton (object.create)

//2)object literals⬇️
const obj={
    name:"Hitesh",
    age:20,
    location:"Anand",
    isLogged:false,
    lastLogin:["Monday","Saturday"],
}

//can be accessed by 2 types
console.log(obj.name)
console.log(obj["name"]) //name is in string thatswhy written in quotes

//⭐to add symbol as a key in a object
const mySym=Symbol("key1") //we cant use directly symbol as a key
const obj1={
    name:"Hitesh",
    age:20,
    location:"Anand",
    isLogged:false,
    lastLogin:["Monday","Saturday"],
    mySym:"myKey1",
}
console.log(obj1.mySym)
console.log(typeof obj1.mySym) //though we have written directly but it will act as a string

const obj2={
    name:"Hitesh",
    age:20,
    location:"Anand",
    isLogged:false,
    lastLogin:["Monday","Saturday"],
    [mySym]:"myKey2" //syntax of symbol in obj
}
console.log(obj2[mySym]) //now will act as a symbol
console.log(obj2)

//changing the values
obj2.name="nakshu"
console.log(obj2.name)
// Object.freeze(obj2) //to lock the value so no one can change
obj2.name="nakshii" //will give no error on changing but will not allow to change
console.log(obj2.name)

//function in object
obj2.greeting=function()
{
    console.log("hii hello")
}
obj2.greeting()

obj2.greeting2=function()
{
    console.log(`Hello ${this.name}`)
}
obj2.greeting2() 