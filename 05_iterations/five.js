/// callback function

 // example 1:
// const conding =["js","cpp","java","phyton"]
// conding.forEach( function (name){

//      console.log(name);
    
// })

// example 2:
//
//const conding =["js","cpp","java","phyton"]

// conding.forEach((name)=>{
// console.log(name);

// })



// 3 bal example 
//const conding =["js","cpp","java","phyton"]

// function print(item){
    // console.log(item);
    
    
// }
// conding.forEach(print)


// che kala mang da array element aw index aw arr etc foreach pa through bani print kw
// conding.forEach( (element,index,arr)=>{
// console.log(element,index,arr);

// })




// che pa object bani mng for each loop lgw no dasy ba lagw /call back fuction warta hm wayo aw da zyat mang da database na che data access kw pa hge ki e use kw



const programingLang=[
    

    {
      name : "javascrift ",
      file : "js"
    },

    {
    name:"hyper text markup languege",
    file: "html"

     },
     {
        name:" casecading style sheet",
        file: "css "
     },


]
programingLang.forEach(element => {
    console.log(element.name, '=>',element.file);
    
});




