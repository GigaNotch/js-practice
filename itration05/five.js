const coding = ["js", "rb", "java", "cpp", "c"];

// coding.forEach(function (val) {
//     console.log(val);
// });

// coding.forEach((val,index,arr)=>{
//     console.log(val,index,arr)
// });

const mycoding=[
    {
        langName:"javascript",
        experince:"30yr",
    },
    {
        langName:"cpp",
        experince:"18yr",
    },
    {
        langName:"python",
        experince:"10yr",
    }
]
mycoding.forEach((item,index,array)=>{
        console.log(index)
        console.log(item,array)
})