//⭐video 48
class User{
    constructor(email,password)
    {
        this.email=email;
        this.password=password //it will not set pass
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value)
    {
        this._password=value //this will set pass
    }
    
}

const hitesh=new User("abc@gmail.com","abc")
console.log(hitesh.password)