// for loop
     
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is best number");
        
        
    }
    else if(element==10){
        // console.log("10 is last number in loop");
        
    }
    // console.log(element);
    
    
}


let myArray=["zain","ahmad","khan","sanan"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}



// for (let index = 0; index < 20; index++) {
//     if (index==5) {
//         console.log("5 is detected");
        
//         break;
//     }
//     console.log(index);
    
    
// }





for (let index = 0; index < 20; index++) {
    // console.log("value of i is ",index);
    
    if (index==5) {
        console.log("5 is detected");
        
       continue
    }
    console.log("value of i is ",index);
    
    
}