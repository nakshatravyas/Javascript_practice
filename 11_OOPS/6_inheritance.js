class User{
    constructor(username)
    {
        this.username=username
    }
    logme()
    {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,pass)
    {
        super(username) //to refer the upper class no need of writing call and this and all
        this.email=email
        this.pass=pass
    }
    addCourse()
    {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai=new Teacher("chai","chai@email",'1234')
chai.addCourse()
chai.logme()
console.log(chai instanceof Teacher)
console.log(chai instanceof User) //coz chai is of teacher and teacher is inherited from user

const masalachai=new User("masalachai")
masalachai.logme()