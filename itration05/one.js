// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("mid of the process")
    }
    // console.log(element);
    
}
for (let i = 0; i<=10; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop ${j} of outer loop of ${i}`)
        // console.log(i +"*"+ j + `=` + i*j);
    }
    
}

const myarray=["flash","batman","superman"]
// console.log(myarray.length)
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element)
}

// break and continue

// for(i=1;i<=20;i++){
//     if(i==5){
//         console.log("detected 5")
//         break;
//     }
//     console.log(`${i}`)
// }
// for(i=1;i<=20;i++){
//     if(i==5){
//         console.log("detected 5")
//         continue;
//     }
//     console.log(`${i}`)
// }
for(i=0;i<=20;i++){
    if(i%2==0){
        continue;
    }
    console.log(`${i}`)
}