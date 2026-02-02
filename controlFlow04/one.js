//if

// const isUserLoggedIn=true
// const temperature=15
// if( temperature<10 ){
//     console.log("cold in your region")
// }
// if( 10<temperature<30 ){
//     console.log("avg temperature in your region")
// }
// if(temperature>30){
//     console.log("high temperature in your region")
// }

// const number=4
// if(4%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// const score=1000
// // if(score>100)console.log("you can't join the match");
// if(score<300){
//     console.log("an avg player")
// }else if(score<750){
//     console.log("veteran player")
// }else if(score<1000){
//     console.log("pro player")
// }else{
//     console.log("legendary player")
// }

const onlineUser=true;
const playingUser=true;

if(onlineUser&&playingUser){
    console.log("yes you are eligble for the tournament")
}

const loggedInFromGoogle=false
const loggedInFromEmail=true
if(loggedInFromGoogle||loggedInFromEmail){
    console.log("yes you are able to log in")
}