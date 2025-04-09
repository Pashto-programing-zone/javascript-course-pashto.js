


// fillter loop example 1: numbers
// const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newnums=mynums.filter( (nums)=> nums>4)
// console.log(newnums);



//example 2: strings
// const conding =["js","cpp","java","phyton"]
// const names=conding.filter( (element)=>element)
// console.log(names);





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userbooks=books.filter( (bk)=>bk.genre==='History')
   
//  userbooks=books.filter( (bk)=>{return bk.publish>=2000})      // pa d ki mang scope use karai no return keyword ba use kw
 userbooks=books.filter( (bk)=>{return bk.publish>=2000 && bk.genre=== "History"})  // and perator mang use ko     
 userbooks=books.filter( (bk)=>{return bk.publish>=2000 && bk.genre=== "sciecnce"})     
 userbooks=books.filter( (bk)=> bk.publish>=2000)              // aw pa d ki mang scope na dai use karai
  console.log(userbooks);





  
  