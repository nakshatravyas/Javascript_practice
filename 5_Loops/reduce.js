const myNums=[1,2,3]

const total= myNums.reduce((acc,currval)=>{
    console.log(`acc ${acc} and curr ${currval}`)
    return acc+currval
},0)

console.log(total)

const mycart = [
    {
      product: "Laptop",
      price: 85000
    },
    {
      product: "Smartphone",
      price: 30000
    },
    {
      product: "Wireless Headphones",
      price: 5000
    },
    {
      product: "Gaming Console",
      price: 40000
    },
    {
      product: "Smartwatch",
      price: 15000
    },
    {
      product: "External Hard Drive",
      price: 7000
    },
    {
      product: "Bluetooth Speaker",
      price: 2500
    },
    {
      product: "Mechanical Keyboard",
      price: 6000
    },
    {
      product: "Monitor",
      price: 18000
    },
    {
      product: "USB-C Cable",
      price: 500
    }
  ];
  
const totalprice= mycart.reduce((acc,item)=>{
    return acc+item.price
},0)
console.log(totalprice)