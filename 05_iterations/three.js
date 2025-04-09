// for of loop

// ["","",""] da zamng sara deer strrings d aw da na mang da loop pa through data acces kw 
// [{},{},{}]   da zamng sara deer objects d aw da na mang da loop pa through data acces kw 


const array=[1,2,3,4,5]
for (const element of array) {
    //console.log(element);
    
    
}


let greeting="zain ul abideen"
for (const greet of greeting) {
    // console.log(`my  name each char  :  ${greet}`);
    
    
}


// map iteratible na dai no mang da mang pa loop bani na sho access kawlai
// maps :   pa map ki ba value uniq e aw repeatble value bani ba kar na kae
// pak me repeat ko no kar na kae 


const map= new Map()
map.set('pak',"pakistan")
map.set('pak',"pakistan")
map.set('cn',"china")
map.set('ksa',"saudi arabia")
console.log(map);

for (const [key,value] of map) {
    // console.log(key, '=>',value);
    
    
}

// for of loop mang pa object1 bani walagw kho da error rkae""object1 is not iteratble"
let object1={
    name:"zain",
    nickname:"khan"
}

for (const [key,value] of object1) {
    
    // console.log(key,'=>', value);
    
}