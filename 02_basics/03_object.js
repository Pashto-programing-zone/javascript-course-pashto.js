
const mysym= Symbol("key1")
const jsuser= {
    name:"zain",
    age:18,
    location:"swat",
    email:"zain@google.com",
   isloggedIN:false,
    lastloggedIn:["monday","teuseday","wednesday"],
    [mysym]:"key1",


}

console.log(jsuser.email)
console.log(jsuser["email"])
 console.log(jsuser["age"])
console.log(jsuser["location"])
console.log(jsuser["islogedin"])
console.log(jsuser["lastlogedIn"])
console.log(typeof jsuser[mysym])

jsuser.email="zain@pak.com"
//Object.freeze(jsuser)
jsuser.email="zain@swat.com"
console.log(jsuser["email"])

console.log(jsuser)

jsuser.greeting= function(){

    console.log("hallo jsuser");
}
jsuser.greetingtwo=function(){
    console.log(`hallo jsuser,${this.age},${this.email},${this.isloggedIN},${this.lastloggedIn},${this.location},${this.name},${this.Symbol}`)
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());