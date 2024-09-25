const score=400
console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toFixed(2))

const otherNum=23.585156
console.log(otherNum.toPrecision(3))//for precision and rounding off, here 3 as arg so it will do round of 23.5 and after 5 there is 8 the 23.6
const otherNum1=223.585156
console.log(otherNum1.toPrecision(3))

const hundereds=100000
console.log(hundereds.toLocaleString('en-in'))//will add commas in the number for readability

// ===============================Math====================================
console.log("===============================Math====================================")

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(45.6))
console.log(Math.floor(45.6))
console.log(Math.random()*10+1)
console.log(Math.floor(Math.random()*10+1))

//give value between 10 and 20 including 10
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) //general formula for random values betn min & max

//math.random() - random values between 0 and 1
//math.random()*10 - random values between 0 and 9
//math.random()*10+1 - random values between 1 and 10 exclude 0 by adding 1
//math.floor(math.random()*10+1) - random values between 1 and 10 without decimals 

