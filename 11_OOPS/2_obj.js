//⭐video 43
// ***********************************************everything is object*********************************************
//everything in js is a object and each and everything in js we can make it behave like object
//function is a function also and object also...working will behave like function but you can also make anything behave like object
//similarly array string can behave like object

function multipleBy5(num)
{
    return num*5
}

multipleBy5.power=2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype) //all the properties of prototypes and context all are there in this

// ***************************************************************************************************************
function createUser(username,score)
{
    this.username=username
    this.score=score
}

//making and injecting our own methods in prototype
createUser.prototype.increment=function()
{
    this.score++;
}
createUser.prototype.printMe=function()
{
    console.log(`The score is ${this.score}`)
}

const chai=new createUser("chai",25) //new for telling the chai that i have injected new properties
const tea=new createUser("tea",250)
 
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/