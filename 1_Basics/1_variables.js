const account_id=144556 //value is locked here cant be changed
let account_email="abc@gmail.com" //changable
var account_password="12345" //changable
account_city="Anand" //can be declare the variable like this without using any keyword but bad practice
let account_state; //variable only declared but not given any value then its value is undefined

// account_id=23  attempt to change const but error arrives
console.log(account_id)

account_email="bcd@gmail.com"
account_password="45454"
account_city="Idar"
console.table([account_id,account_email,account_password,account_city,account_state]) //this will log everything in square bracket in tabular structure

/*
//Dont use var because of block scope and functional scope
//eg if value changed here then it will be changed everywhere in whole code
*/