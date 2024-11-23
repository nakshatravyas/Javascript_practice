//***************promise making*****************

//always first the promise task is done then after the resolver task is done
const promiseOne=new Promise(function(resolve,reject)
{
    //do an async task
    //db calls,cryptography,network
    setTimeout(() => {
        console.log('Task is done')
        resolve()
    }, 1000);
})

//***************promise consume*******************

promiseOne.then(function(){
    console.log('Promise consumed')
})

//******************another way of writing**********************

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task is done')
        resolve()
    }, 1000);
}).then(function(){
    console.log('Promise resolved')
})

// ***********************passing data from promise to resolver**************************************

//when we are fetching data from somewhere so this "promiseThree" will fetch it and after it fetches fully then only it is resolved and in resolver the data is passed by the promise with "resolve()" method
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Naksh",email:"naksh@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})

//*************************************************************** */
//error and chaining

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false
        if(!error)
        {
            resolve({username:"Naksh",pass:'123456'})
        }
        else
        {
            reject('Error something went wrong')
        }
    }, 1000);
})
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('The promise is either resolved and rejected')
})

//*************************************************************************

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true
        if(!error)
        {
            resolve({username:"Javascript",pass:'123'})
        }
        else
        {
            reject('Error JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try{
        const response=await promiseFive
        console.log(response)
    }
    catch(error)
    {
        console.log(error) 
    }
}
consumePromiseFive()
//if promise is handled with async await then it should be in try catch block as the async and await dont handle the errors directly

// ***************************************************fetch**************************************************************************************************

//try catch method
async function getalluser()
{
    try{   
        const response=await fetch('https://jsonplaceholder.typicode.com/users')     //fetch takes time so await is req.                                                                                                        
        const data=await response.json()                                             //to convert in json format takes time so await is req.
        console.log(data)
    }
    catch(error)
    {
        console.log('ERROR: ',error)
    }
}
getalluser()

//.then catch method

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})


// 2 methods :
//async await with try catch
//.then catch