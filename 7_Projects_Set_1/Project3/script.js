const clock=document.querySelector('.clock')


setInterval(()=>{
    const mydate=new Date()
    clock.innerHTML=mydate.toLocaleTimeString()
},1000)