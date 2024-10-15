const userEmail=["one"]

if(userEmail)
{
    console.log("Got the mail")
}
else
{
    console.log("Dont got the mail")
}

//truthy - non empty string,empty array,array ,"0"(zero in string),"false","  ",{},function(){declared empty fun.},everything except falsy
//falsy - empty string,false,-0,0,BigInt(0n),null,undefined,NaN

//=========================================================================================================================================================
//Nullish coalescing operator (??) : null undefined

let val1
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??15

// val1=null??undefined
// val1=undefined??null


console.log(val1)

//=========================================================================================================================================================
//Terniary operator

//condition ? true:false

const price=100
price>80?console.log("Greater"):console.log("Lower")