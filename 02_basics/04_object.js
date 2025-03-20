//const tinderuser=new Object()    //singleton object
const tinderuser={}       // non singleton object,or,litrel object

tinderuser.id="123abc"
tinderuser.name="mahmat"
tinderuser.location="turky"
//console.log(tinderuser);

const regularuser={
    email:"dotcom@gmail.com",
    userfullname:{
        fullname:{
            firstname:"zain",
            lastname:"ul Abideen"
        }
        }
    }

//console.log(regularuser.userfullname.fullname.lastname)



const obj1={1:"a",2:"b",3:"c"}
const obj2={ 4:"d",5:"e",6:"f"}


//const obj3=Object.assign({},obj1,obj2)// <--1 method da dai aw bal method spreed operator dai
const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"zain@gmail.com",

    },
    {
        id:2,
        email:"khan@gamail.com",

    }
]
//users.[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));// tideruser object che dai da hge (keys) mang pa dasy terqa goro
// console.log(Object.values(tinderuser));// pa d ki mang value goro
// console.log(Object.entries(tinderuser));// aw pa ki mang da hage entries goro **keys hamisha first e 2nd e value e
// console.log(tinderuser.hasOwnProperty('location')); // pa d ki te mang tapos kw che sta sra location property sha no pa jawab ki true rako bolean ki mean shta.




       //  *************************************************************************************

    const course= {
     coursename:"js in pashto ",
     courseprice:999,
     instructore:"zain",

}
//console.log(course.constructore);//pa d (course.constructor) sara mang dirct constructor show 
//console.log(course);


const {instructore}=course// pa d line ki mang direct instructor da ( )na rawghsto 
const {instructore:teacher}=course
console.log(instructore);
console.log(teacher);

 