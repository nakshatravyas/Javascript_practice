//objects using constructor
// const tinderU={} //non singleton

const tinderUser=new Object() //singleton

tinderUser.id="1234asdf"
tinderUser.name="Jack"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

//object nesting
const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"John",
            lastname:"Doe"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

//combining object
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

/*1 const obj3=Object.assign({},obj1,obj2) //{} is targetr and obj1 and obj2 are source, without {} all value will go in obj1 as it will become target*/
/*2*/ const obj3={...obj1,...obj2} //spread operator
console.log(obj3)

//other methods for objects
console.log(tinderUser)
console.log(Object.keys(tinderUser)) //returns all keys in the form of a array
console.log(Object.entries(tinderUser)) 
console.log(tinderUser.hasOwnProperty('isLogged')) //availability of particular properly