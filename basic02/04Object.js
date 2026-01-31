// const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="smith"
tinderUser.isUserLoggedIn= false
// console.log(tinderUser);

const regularUser={
    email: "regular@gamil.com",
    fullName:{
        UserName:{
            firstName: "notch",
            LastName: "giga"
        }
    }
}
// console.log(regularUser.fullName.UserName)

const obj1={
    1:"a",
    2: "b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);

const Users=[
    {
        name: "user1",
        email:"user1@gamil.com"
    },
    {
        name: "user2",
        email:"user2@gamil.com"
    }
]

Users[0].email; // bckend
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('age'));

// console.log(typeof tinderUser)

const company={
    name: "notch Oraganisation",
    CEO: "notch",
    age:18
}

const {name:N}= company // can also change name according to your need like {:N}
console.log(N);
// console.log(company.name)  insted of this i can use above code 

// {
//     "name":"notch",
//     "age": 18,             // json
//     "NetWorth": "1$"
// }

[
    {},
    {},
    {}
]