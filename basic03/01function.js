
function sayMyName(){
    console.log("n");
    console.log("o");
    console.log("t");
    console.log("c");
    console.log("h");
}
// sayMyName()

// function addTwoNumber(n1,n2){
//         console.log(n1+n2)
//         }

function addTwoNumber(n1,n2){
    //    let result=n1+n2;
    //     return result
    return n1+n2;
}
const result=addTwoNumber(4,4);
// console.log("result:", result);

function UserLogin(username="user"){
    if(!username){
        console.log("Please enter the usrname first")
        return;
    }
    return `hey ${username} , you just logged in`
}

// const message=UserLogin("notch")
// console.log(UserLogin("notch"));
console.log(UserLogin())