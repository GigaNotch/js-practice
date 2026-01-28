let myDate =new Date();
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate)

// let myCreatedDate =new Date(2026,0,1);
// let myCreatedDate = new Date(2026,1,4,4,4)
// let myCreatedDate= new Date("2026-01-01")
let myCreatedDate= new Date("12-01-2026")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor((Date.now())/1000))

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDate())