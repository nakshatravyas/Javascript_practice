//for

for (let index = 0; index < 10; index++) {
    // console.log(index)
}

// ===================Array specific loops==============================================
//for of

const arr=[1,2,3,4,5]
for (const element of arr) {
    console.log(element)
}

const str="hello nakshu"
for (const element of str) {
    console.log(element)
}

//======================Maps==================================================================
const map=new Map()
map.set('IN',"India")
map.set('AM',"America")
map.set('FR',"France")

console.log(map)

for (const [key,value] of map) {
    console.log(key," ",value)
}

// =======================For of loop on obj=====================================================================
const obj={
    'game1':'NFS',
    'game2':'Spiderman'
}
//will not work
// for (const [key,value] of obj) {
//     console.log(key," ",value)
// }
