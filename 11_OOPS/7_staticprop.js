class User{
    constructor(username)
    {
        this.username=username
    }
    logme()
    {
        console.log(`Username: ${this.username}`)
    }
    static createId() //static stops the function to be used by every object that is of this class
    {
        return `123`
    }
}

const nakshu=new User("nakshu")
// console.log(nakshu.createId()) static denies to use

class Teacher extends User{
    constructor(username,email)
    {
        super(username) //behind the scenes super is actually call which takes "this" and everthing
        this.email=email
    }
}

const iphone=new Teacher("apple","apple@email")
iphone.logme()
//console.log(iphone.createId()) //no access of static function in inherited class also