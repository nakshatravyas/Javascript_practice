// const lang=["js","py","rb","cpp"]

// const values=lang.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values)
//for each does not return any value

// =============================filter===============================================

const arr=[1,2,3,4,5,6,7,8,9,10]

const newNums=arr.filter((num)=>{
    return num>4
})
console.log(newNums)

//doing same thing with for each loop
const arr1=[1,2,3,4,5,6,7,8,9,10]
const arr2=[]
arr1.forEach((num)=>{
    if(num>4)
    {
        arr2.push(num)
    }
})
console.log(arr2)

// =======================================================================================================
const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960,
    edition: "1st"
  },
  {
    title: "Hello world",
    genre: "Dystopian",
    publish: 1949,
    edition: "1st"
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publish: 1925,
    edition: "2nd"
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish: 1951,
    edition: "1st"
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish: 1954,
    edition: "2nd"
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813,
    edition: "3rd"
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: "1st"
  },
  {
    title: "Moby-Dick",
    genre: "Adventure",
    publish: 1851,
    edition: "1st"
  },
  {
    title: "War and Peace",
    genre: "Historical Fiction",
    publish: 1869,
    edition: "3rd"
  },
  {
    title: "The Alchemist",
    genre: "Philosophical",
    publish: 1988,
    edition: "4th"
  }
];

// const userBooks= books.filter((book)=>{
//     return book.genre==='Fiction'
// })
// const userBooks= books.filter((book)=>{
//     return book.publish>1900
// })
const userBooks= books.filter((book)=>{
    return book.publish>1900 && book.genre==='Fantasy'
})

console.log(userBooks)