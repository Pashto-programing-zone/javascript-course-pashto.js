const pak_stars=["afridi","shohaib akhtar","imran khan","unas khan",]
//console.log(pak_stars)


 const ind_stars=["tandulkar","sewag","virat",]

// const cricket_stars=pak_stars.concat(ind_stars)
//console.log(cricket_stars)


const all_stars=[...pak_stars,...ind_stars]  // ... pa 3 dots sara da mang sprit kw /example: da sheshe glass che mang zmaki ta artaw ko no tote she daga shan 2 array xamng sara tote she aw 1 te jor sho.

console.log(all_stars)


const array1=[1,2,3,[5,6,7,[9,0,1,]],8,10]
const array2=array1.flat(Infinity)
console.log(array2)


console.log(Array.isArray("zain"))//da mang ta khae che array dai kana (.isArray)
console.log(Array.from("zain")) // (Array.from) e array ta convert kae



const marks1=100
const marks2=200
const marks3=300

console.log(Array.of(marks1,marks2,marks3))//(Array.of) ,variable value convert kae array ta
