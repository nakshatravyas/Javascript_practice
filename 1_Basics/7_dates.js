let myDate=new Date()
console.log(typeof myDate) //⭐ it is a object
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

// =========================Custom date====================================================
console.log("=========================Custom date=============================")

let myCreatedDate=new Date(2023,0,23,5,3,25) //year month date hours minutes seconds ms
console.log(myCreatedDate.toString())
console.log(myCreatedDate.toLocaleString())

let myCreatedDate1=new Date("01-14-2023") //mm-dd-yyyy
console.log(myCreatedDate.toString())
console.log(myCreatedDate.toLocaleString())

// ===============================Time Stamps===============================================
console.log("=========================Timestamps=============================")
//this is mainly used for applications like quiz or polls or buzzer quiz where there is precise comparisions of two times

let ts=Date.now()
console.log(ts) //value in ms
console.log(myCreatedDate.getTime()) //value in ms
console.log(Math.floor(Date.now()/1000)) //⭐ convert in seconds

// ===============================Destructuring date=====================================
console.log("=========================Destructuring date=============================")

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1) //+1 as month start from 0
console.log(newDate.getDay())

//we can customize tolocalestring
console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))