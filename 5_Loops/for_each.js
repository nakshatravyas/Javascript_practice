//for each
const lang=["js","py","rb","cpp"]

// lang.forEach( (item)=>{
//     console.log(item)
// } )

// lang.forEach( function (item){
//     console.log(item)
// } )

// function printMe(item)
// {
//     console.log(item)
// }
// lang.forEach(printMe)

lang.forEach((item,index,lang)=>{
    console.log(item,index,lang)
})


//with object
const code=[
    {
        name:'nakshu',
        age:19
    },
    {
        name:'bakshu',
        age:25
    },
    {
        name:'takshu',
        age:15
    },
]

code.forEach((item)=>{
    console.log(item.name)
})