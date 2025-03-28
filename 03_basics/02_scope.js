

// {}   curly brakets ta scope y


// da simple program che za run kom no run kege sa masala na kae . kho masala pa scope ke kae lande example lekm
// let a=10;
// const b=20;
// var c=30;
//   console.log(a);
//   console.log(b);
//   console.log(c);  

  

if (true){

    let a=10;
    const b=20;
    var c=30;
}
// console.log(a);// scope ki danna che mng a,b,c, define kary d no a,b,na run kege aw c run kege.
//  da masala var variable da scope na bahar da run kege aw da pakar da che bahar na run kedai.da d waji var deer khalk avide kae na e use kae zyat d masali da waji
// console.log(b);
// console.log(c);



//  2nd example var variable t mang larko 


if (true){

    let a=10;  //ka da a za da scope na bahr run koom da ba na run kege da hge waja da da che da scop variable  ba pa scope ki run kege 
    const b=20;
    
}
 //console.log(a); // run na pas mata y a is not define zaka da da scope na bahar dai dasy b hm.
 


//================example 3 ==============
// if else stament na bahar zamang sra globle scope e ,aw danna locale scope e ,

const a=100
if(true){

    let a=10
    const b =20
  //  console.log("iner :" ,a);// iner 10 result e rako
}
//console.log(a); // a me console ko mala e 100 valu rakra const a=100 ma da scope na bahar define kaarai 
// pa scope ki danna che a define dai haga ba za danna define kom ala ba mala da iner a value rakae. 







//======================function scope example=============================
// da zamng sara 2 function d one and two kha no pa one function ki zamng sra two function danna dai ,
//da one function mesal zamang sara da yo mashar sary dai aw function two mesal zamng sara da yo mashom dai ,
// mesal pa twar da mashar kas sara icecream d no mashom e t ghokhtai she sa masala na kae 
// aw ka charta da mashom sara icecream e no mashar srai e t nashe ghutai bad khakry,
// no one function che dai tow fuction nashe access kawalai aw two fuction one values access kawalai she
function one(){

    const username="zain"
  
    function two(){

        const website="youtube"
        console.log(username); // d line zamng sra username access ko da first function""zain" e show ko
        
    }
    //console.log(website);     da da scope na mang bahar execute ko no na run kege y ta bahar e hahahahha no da d waje xamang sar two() hm na excute kege
       two()  // dalta mng two function call ko no excute sho console.log(website)mang coment ko ala
    
}
one()
 



//===========================example for if else scope===============================


if(true){

    const username="zain"
    if(username==="zain"){
        const web="youtube"
        console.log(username+ web);
        

    }
    //ka charta za da scope na bahar sham aw console km web da ba kar nakae
  //  console.log(web);  error rakae no coment me ko
    
    
}
//ka charta za da scope na bahar sham aw console km username da ba kar nakae
//console.log(username); da hm error rkae da me comment ko was ba da program run she >console.log(username+web);
