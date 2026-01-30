// Singelton
//Object.creat

//Object litrals

const mySym=Symbol("key1");

const JsUser={
    name: "notch",
    "coursename": "BCA",
    age: 18,
    [mySym]:"key1",
    email: "notch@google.com",
    location: "uttrakhand",
    isLoggedIn: false,
    lastLoggedInDays: ["monday","saturday"]
}

console.log(JsUser.age);
console.log(JsUser["email"])
console.log(JsUser["coursename"])
console.log(JsUser[mySym])

JsUser.email="notch@gamil.com"
// Object.freeze(JsUser);  \\ if this will work than there can't be no change in object like functions or info change
JsUser.email="notch@microsoft.com"
console.log(JsUser["email"])
console.log(JsUser)

JsUser.greeting= function(){
    console.log("hello jsuser how are you")
}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`hello user, ${this.name}`)
}
console.log(JsUser.greetingTwo())