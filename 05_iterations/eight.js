// reduce funtion example

const mynum=[1,2,3]

// const total=mynum.reduce( function(acc,curval){ 
//     console.log(`acc:${acc},and  curval${curval}`)
//     return acc+curval})





// arrow funtion example

const total=mynum.reduce( (acc,curval) => {
    console.log(`acc:${acc},and  curval${curval}`)
   return acc + curval},0)

// console.log(total);


const shopingCart=[

    {
        coursename: "javascript",
         price: 9999
    },
    {
        coursename:"python",
        price:999

    },
    {
        coursename: "data science",
        price: 4999
    },
]

const totalbill=shopingCart.reduce( (acc,item)=> {
    console.log(`accu is ${acc} and item price is ${item.price}`);
    
    return acc+item.price},1)
console.log("total bill is :",totalbill);
