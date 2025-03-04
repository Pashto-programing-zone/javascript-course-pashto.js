let mydate= new Date()// date is object
console.log(mydate)

let mdate= new Date()
console.log(mdate.toString());
console.log(mdate.toDateString());
console.log(mdate.toISOString());
console.log(mdate.toLocaleDateString());
console.log(mdate.toJSON());
console.log(mdate.toLocaleTimeString());
console.log(mdate.toUTCString());

let mycreatedDate= new Date(2025, 0, 20)
console.log(mycreatedDate.toDateString())


let mytimeStamp= Date.now ()
console.log(mytimeStamp)
console.log(Math.floor(Date.now()/1000))




let newDate= new Date()
console.log(newDate)
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMonth()+1);








