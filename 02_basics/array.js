const myArray=[0,1, 2, 3, 4, 5]

//console.log(myArray[3])
//myArray.push(7) // push ki zamng sara pa last element add kae
//myArray.pop()  // pop operation zamang sara 
//console.log(myArray)


//const mySters=["afridi","shohaib","babar","rizwan"]

//another way to diclare array
const array2= new Array(1,2,3,4,5,6,7,8,9,)
//array2.unshift(10)  // unshift operation ki zamang sara pa awala ki element add kae
//array2.shift()     // shift operation ki zamang sara awalanai element khatmai
//console.log(array2)

//console.log(array2.includes(15)); // include (15). ya bal sa value mang ta show kae che da element zamang sara shta kana no che kala element pa array ki e mang la ba .true. value rakai aw che nae no false
//console.log(array2.includes(4));
//console.log(myArray.indexOf(4)); // da mang ta show kae che "4" element zmng sara 3 index abni dai
// const newarray=myArray.join()
// console.log(myArray)
// console.log(newarray)


// slice ,splice


console.log("A",myArray)
const myn1= myArray.slice(1,4)// pa slice operation sara last element na show kege yani 1 2 3 ba show kege 4 ba na show kege

console.log(myn1)
console.log("B",myArray)



console.log("C",myArray)
const myn2=myArray.splice(1,4)
console.log(myn2)
console.log("D",myArray)

// important point ******
// splice ki ba zamng sara kam orignal array e haga ba change kege. 1 2 3 4 element zamng sara da splice operation saara change sho.
// aw mang ta array show ko[0,5].aw orignal array zamang sara o [0,1,2,3,4,5]






