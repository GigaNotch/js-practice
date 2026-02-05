const initialval=[1,2,3];

// const totalval=initialval.reduce( (pre,curr)=>{
//     console.log(`pre:${pre},curr:${curr}`)
//     return pre+curr;
// },0 )
// console.log(totalval);

const totalval=initialval.reduce( (pre,curr) => pre+curr ,0)
// console.log(totalval)

const course=[
    {
        name:"js course",
        price:2000
    },
    {
        name:"py course",
        price:200
    },
    {
        name:"cpp course",
        price:2999
    },
    {
        name:"allinone course",
        price:5000
    },
]

const totalprice=course.reduce( (acc,item)=>{return acc+item.price },0)

console.log(totalprice+(2/100)*totalprice)