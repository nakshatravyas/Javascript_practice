//⭐video 44

function setusername(username)
{
    this.username=username
}

function createuser(username,age,rollno)
{
    setusername.call(this,username)
    this.age=age
    this.rollno=rollno
}

const user1=new createuser('nakshu',20,44)
console.log(user1)