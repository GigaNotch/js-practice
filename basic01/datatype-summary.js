// PRIMITIVE 

// 7 type : string,number,boolean,null,undefiend,symbol,bigint

const score = 100
const scoreValue = 100.4

const userloggedIn = false
const outsideTemp = null
let dateLoggedIn;

const id = Symbol('223')
const id2 = Symbol('223')
// console.log(id===id2)

// reference (non-premitive)
// array,object,functions

const heros = ["iron man","thor","bat man"]
let myobj = {
       name:"notch",
        age:17,
}

const MyFunction=function(){
    // console.log("hello world")
}
// console.log(typeof Bigint)
// console.log(typeof outsideTemp)
// console.log(typeof MyFunction)

// stack (premitive), heap (non-premitive)

let myName = "vijay"
let otherName = myName
otherName = "notch"
console.log(myName);
console.log(otherName);

let user1 = {
            name:"notch",
            upiId:"notch.upi",
            email:"user@gamil.com"
}

let user2 = user1;
user2.email = "user2@gmail.com"

console.log(user1.email)
console.log(user2.email)