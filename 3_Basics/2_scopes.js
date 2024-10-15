var c=342
let a=100
if(true)
{
    let a=10
    const b=20
    var c=30
    console.log("Inner ",a)
}
console.log("Outer ",a)
// console.log(b)
console.log(c) 

//scope is everything inside {}

//var is not blocked scope it is global means anyone can change its value and redeclare anywhere in or out of scope like here the var c in line 1 is changed in line 6 so its a problem

//const and let are blocked scope means their existence remain in particluar scope only like here if i printed c outside of if then error occurs and the value of a remains same of outside and inside seperately

//========================================================================

function one()
{
    const user="nakshu"
    function two()
    {
        const website="youtube"
        console.log(user)
    }
    // console.log(website)
    two()
}
one()

//in nested function the child function can access parent variables

// =============================styles of making functions=========================================

function addone(num)
{
    return num+1
}
addone(5)

const addtwo=function(num) //holding in variable
{
    return num+2
}
addtwo(5)

// ==================================basic example of hoisting====================================

console.log(addone1(5)) //this will execute
function addone1(num)
{
    return num+1
}

// addtwo2(5) //this will give error as its function is holded in variable
const addtwo2=function(num) //holding in variable
{
    return num+2
}