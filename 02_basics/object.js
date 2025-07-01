

//object lirterals
const mysym = Symbol("mykey1")

const juser ={
    name: "Prakash",
    mysym:"key",
    age: 17,
    email: "Prakash12@gmail.com",
    isLoggedIn: false,
    LastdayLoggedIn: ["Sun","Mon"]
}
// console.log(juser.email)
// console.log(juser["email"]);
// console.log(juser.mysym);

juser.email= "prakash34@gmail.com"

//Object.freeze(juser)

juser.email= "prakaskjsdjjd@gmail.com"
// console.log(juser);

//adding function

juser.greetings = function()
{
    console.log("hello js");
}
juser.greetingstwo =function(){
 console.log(`hello js, ${this.name}`);
 
}
console.log(juser.greetings());
console.log(juser.greetingstwo());



