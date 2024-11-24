// ***********Lexical Scoping*************************
function outer()
{
  let user='nakshu'
  function inner()
  {
    console.log("Inner: ",user)
  }
  inner()
}
outer()
// console.log("Outer: ",user)

//this is lexical scoping: in which if there is function in a function then the inner function can access the things of its outer one(parent)

//but if two functions are in a single outer function the both can access things of outer(parent) but both cannot access things of each other
//Example:
// function outer()
// {
//   let user='nakshu'
//   console.log(secret)
//   function inner()
//   {
//     let secret='123'
//     console.log("Inner: ",user)
//   }
//   function inner2()
//   {
//     console.log(secret)
//     console.log("Inner: ",user)
//   }
//   inner()
// }
// outer()
//also the outer cant access its child's thing

// **************************Closure*******************************

//jab aap pura function hi return kar dete ho to sirf function hi return nai hota uska pura lexical scope bi return hota h
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
