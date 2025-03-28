// function myname (){

//     console.log("z");
//     console.log("a");
//     console.log("i");
//     console.log("n");
    

// }

//myname()


// function addTwoNumbers(number1,number2){
   
//     console.log( number1+number2);


// }
// addTwoNumbers(5,6)

// function subtractionOfTwoNumbers(number1,number2){
// console.log(number1-number2);
// }
// subtractionOfTwoNumbers(10,5)


// function multiplicationsOfTwoNumbers(number1,number2){
//     console.log(number1*number2);
//     }
//     multiplicationsOfTwoNumbers(10,5)

    // function divisionOfTwoNumbers(number1,number2){
    //     console.log(number1/number2);
    //     }
    //     divisionOfTwoNumbers(10,5)


    //     function power(number,power){
    //         power:number**number
    //         console.log(number**power);
    //         }
    //         power(3,3)



    function avrg (x,z)  {
        return 1+(x+z) / 2
         
     }
     let a=1;
     let b=2;
     let c=3;
    //  console.log(avrg(a,b));
    //  console.log(avrg(b,c));
    //  console.log(avrg(b,c));
     
    
     //************* function with loop/
    function project(pjt){

        for(pjt=1;pjt<=10;pjt++){
         console.log("project ",pjt)

       }
       return "loop is completed"   

    }
    let pjt=1;
   // console.log(project());
   
    
// da 1 bal function dai 
    function loggedinusermsg(username){

        return`${username} welcome to this page`
    }

   // console.log(loggedinusermsg("zain"));
   // console.log(loggedinusermsg());// che kala warta mang sa value pas na ko no zamng sara ba undefine wellcome to this page show kae 
    

   function loggedinusermsg(username){
    if(!username){
        console.log("please inter username");
        return
        
    }
    return`${username} welcome to this page`
}

//console.log(loggedinusermsg("zain"));// aw pa d line ki e zain username waghsto aw print e ko 

console.log(loggedinusermsg());// pa d line ki mang user name warnako no excute na pas e undefine rako aw da msg e print ko che "please inter username".


