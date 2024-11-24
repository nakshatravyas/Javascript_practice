class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass() {
        return `${this.password}abc`
    }

    capusername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('nakshu', 'abc@email', '1234asd')
console.log(chai.encryptPass())
console.log(chai.username)

//***********without class syntax (behind the scene using prototype)*************

// function User(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }

// //now we will inject properties in User
// User.prototype.encryptPass=function()
// {
//     return `${this.password}abc`
// }
// User.prototype.capusername=function()
// {
//     return `${this.username.toUpperCase()}`
// }

// //use
// const tea=new User('nakshu', 'abc@email', '1234asd')
// console.log(tea.encryptPass())
// console.log(tea.capusername())