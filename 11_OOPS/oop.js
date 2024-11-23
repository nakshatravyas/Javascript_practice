//object is the base unit in js like classes in other
const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUserDetails:function()
    {
        console.log("Got the details")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}
console.log(this)
console.log(user.username)
console.log(user.getUserDetails())    

// *************************************constructor function***********************************

// const promiseone=new Promise()
// const date=new Date()
//new allows ek hi object se multiple instances bana sako
//1)ek empty object create hoga which is a instance a empty object
//2)constructor function is called with help of new and sab arguments pack ho jaegi
//3)ye this keyword me sab arguments inject ho jata hai 
//4)hume mil jaate hai sab

//constructor function
function User(username,age,isLogged)
{
    this.username=username
    this.age=age
    this.isLogged=isLogged
    this.greetings=function()
    {
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const userOne=new User('Naksh',15,true)
const userTwo=new User('Hitesh',20,false)
console.log(userOne)
console.log(userTwo)
