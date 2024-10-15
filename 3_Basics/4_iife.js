//⭐reason to use: want it to immidiately invoke and should remain unpolluted from global scope

(
    function chai() //⭐named iife as fun has a name
    {
        console.log("DB connected")
    }
)();

//two things in syntax: 1st parans in which fun will be there ()() then second for immediate invoke
//always to write semicolon to end code at end

// ==================================================
//writting in form of arrow function

( ()=>{                               //⭐unnamed iife fun not have a name
    console.log("chai")
} )();

( (name)=>{
    console.log(`${name} chaivala`)
} )('dolly');