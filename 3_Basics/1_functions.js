function myname(){
    console.log("Hii")
}
// myname//is ref
myname()//execution

function addTwoNum(number1,number2) //these are parameters
{
    return number1+number2
}

const result=addTwoNum(10,20) //10 20 are arguments
console.log(result)

function login(username="sam") //given default value
{
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just came here!`
}
// console.log(login()) if no value passed then undefined will come
console.log(login("hii"))

// ===========spread/rest operator===============

function calPrice(...num)
{
    return num
}
console.log(calPrice(200,300,4100))

//=============================================

function calPrice2(val1,val2,...num)
{
    return num
}
console.log(calPrice2(200,300,4100))

//=============================================

const user={
    name:"hitesh",
    price:25
}

function handle(anyObj)
{
    console.log(`${anyObj.name} I am having price ${anyObj.price}`)
}
handle(user)

//=============================================

const myArray=[200,400,600,800]

function  handlearray(anyArray)
{
    return anyArray[0]
}
console.log(handlearray(myArray))