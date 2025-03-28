const user={
    username: "zain",
    price: 999,
     usermessage: function(){
        console.log(`${this.username} ,welcome to my store`);
        console.log(`this course price is :${this.price} with discount`)
        console.log(this);
        
     }

}
// user.usermessage()
// user.username="saim"
// user.usermessage()
// console.log(this); che kala mang da scope na ba "this" operation kw no da ba mang ta {} emptty object show kae.

// ka charta da "console.log(this)" mang pa browsser or inspict bani console kw no mang ta ba window show kae.
// aw browser ki danna che globle object dai haga window object dai 




// function chai(){

//     let username="zain"
//     console.log(this.username);
    

// }
// chai();// da ba mang ta undefine show kae this pa fuction ki kar na kae 



//********************************example :arrow function **************************************

// const chai=function(){

    
//     let username="zain"
//        console.log(this.username);
    
// }
// chai()// da function hm undefine rakae ,da fuction hm this na pejani



// *********************************arrow function*************************************************



// const chai=()=>{

    
//     let username="zain"
//        console.log(this.username);
//        console.log(this); // pa arrow fuction (this) ba hm mang ta {} impty object show kae
    
// }
// chai()//da hm mang ta undefine show kae. aw this function na pejani





// ******************************************************************




// const addTow=(num1,num2)=>{

//     return num1+num2


// }
// console.log(addTow(3,4));


// ************************    zama akhpl example    ************************************

// che pa kam function ki mang return use kw haga zamng sara explecet funtion e  

// const addTow=(num1,num2)=>{

//     num1="zain"
//     num2="khan"
//     return num1+num2


// }
// console.log(addTow(3,4));
// console.log(addTow());

// ===================================================

//  da implecete funtion dai ,implecete mean ,chalo main laity hain

// const addTow=(num1,num2)=>num1+num2

// console.log(addTow(3,5));


// ******************************************************
// dasy hm arrow function lekalai sho (num1+num2) pa paranthisis ki mo band ko zyat pa react ki use kige

// const addTow=(num1,num2)=>(num1+num2)

// console.log(addTow(3,5));



// ***************************************************************
// che kala mang  object return kw no paranthisis aw pa curly brasis ki ba e bandw

const addTow=(num1,num2)=>({userName:"code with zainy"})

console.log(addTow());     // da e result dai = { userName: 'code with zainy' }