const name="notch"
const repoCount=10

// console.log(name+repoCount+"value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`)

const GameName= new String('notch-vijay-hc')
// console.log(GameName[0])
// console.log(GameName.__proto__)
//console.log(GameName.length)
// console.log(GameName.toUpperCase())

// console.log(GameName)
// console.log(GameName.charAt(3))
// console.log(GameName.indexOf('c'))

const newString=GameName.substring(0,4)
console.log(newString)

const anotherString=GameName.slice(-7,4)
console.log(anotherString)

const newStringOne="   notch   "
console.log(newStringOne)
console.log(newStringOne.trim())  // it give the string "notch" and ignore the space

const url ="https://notch.com/notch%20mehra"
console.log(url.replace('%20','-'))
console.log(url.includes('notch'))
console.log(url.includes('notchhh'))

console.log(GameName.split('-'))