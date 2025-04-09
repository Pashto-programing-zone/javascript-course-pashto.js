// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynum.map( (num)=> num +10 )
// console.log(newnum);

// da example me da pa array wako che paki d strings data aw programing me wasara add ko .map function me use ko

// const conding =["js","cpp","java","phyton"]
// const prname=conding.map( (name)=>name+"  programing")
// console.log(prname);



// example : chain che kala mang muttiple map,filters,for each function use kw




const mynum=[1,2,3,4,5,6,7,8,9,10]
const nums= mynum.map( (num)=> num *10)
.map( (num)=>num+5) 
// .filter( (num)=> num>=55)   // da mi asy try ko ma v che felter p kar kae kana no kar p kae

console.log(nums);
