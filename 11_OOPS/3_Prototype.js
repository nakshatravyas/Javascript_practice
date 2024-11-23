let myName="nakshatra     "
console.log(myName.length) //this is giving string len with space so i want a method like trueLength which gives len without space

//injecting a custom property/method directly in the high level hirearchy i.e. object

let myHero=['thor','captain']

let heroPower={
    thor:'hammer',
    captain:'shield'
}

//custom method
Object.prototype.nakshu=function()
{
    console.log('Nakshu is injected')
}

//now all(array,obj etc) have access to nakshu custom method
//obj
heroPower.nakshu()
//array
myHero.nakshu()

// ****************************************************************************************************************************************
//we have given the new method to obj that is top level so due to prototype behaviour it will be there in arrray string and all
//but what if i give new method to array so will the obj also get it as array is low level than obj

Array.prototype.heyNakshu=function()
{
    console.log('Nakshu in array')
}
myHero.heyNakshu()
//heroPower.heyNakshu()  //obj will not get the method

// ********************************************************************************************************************
//inheritance

const user={
    name:'naksh',
    email:'email@google'
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAss:'JS',
    fullTime:true,
    __proto__:TeachingSupport //this is the ref to other obj in TASupport
}
//old syntax
Teacher.__proto__=user //this is also prototypal inheritance

//mordern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) //teachingsupport can access teacher

// *****************************************************************************************************
//doing our problem of string

let username='nakshuu  '
String.prototype.trueLength=function()
{
    console.log(`True length is ${this.trim().length}`)
}
username.trueLength() //the username will give reference of it to truelength and truelength will act upon it so this.(that is current context, jo bula ra h truelength ko that is username) will get context of username 

"nakshatra      ".trueLength()