//for in loop for objects
const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    py:"python"
}
//key
for (const key in obj) {
    console.log(key)
}
//value
for (const key in obj) {
    console.log(obj[key])
}

for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`)
}

//for in loop for arrays

const lang=["js","py","rb","cpp"]

for (const key in lang) {
    console.log(key)
}
for (const key in lang) {
    console.log(lang[key])
}

//for in will not work on map as it is not iteratable
