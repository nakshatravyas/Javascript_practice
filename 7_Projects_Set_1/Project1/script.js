const bg=document.querySelector('body')
const grey=document.querySelector('#grey')
const white=document.querySelector('#white')
const blue=document.querySelector('#blue')
const yellow=document.querySelector('#yellow')

grey.addEventListener('click',()=>{
    bg.style.backgroundColor='gray'
})
white.addEventListener('click',()=>{
    bg.style.backgroundColor='white'
})
yellow.addEventListener('click',()=>{
    bg.style.backgroundColor='yellow'
})
blue.addEventListener('click',()=>{
    bg.style.backgroundColor='blue'
})
