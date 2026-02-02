const userEmail=[]

if(userEmail){
    console.log("got user email")
}else{
    console.log("did't get the user email")
}

// falsy value

// false, 0, -0, BigInt 0n, "", null, NaN, undefined

//truthy value

// "0", "false", " ", [], {}, functiom(){}

if(userEmail.length===0){
    console.log("array is empty")
}

// nullish coalscing operater(??): null undefined

// let val1=10??20
// let val1= null??10
// const val1=10??null
// let val1=null??undefined

//console.log(val1);

// terniary operator

// condition?true:false

const pizzaprice=10;
pizzaprice>=100?console.log("over 100"):console.log("under 100")