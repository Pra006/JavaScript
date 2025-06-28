// Primitive
 //7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

 // Non-Primitive(call by reference): Array, Objects, Functions 

 const a =["Aakash","Prakash", "Ankit"]
 
 let myObj={
    name:"Prakash",
    age: 22,
 }
 const myFunction= function(){
    // console.log("Prakash"); 
 }

//++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), Heap(Non-Primitive)
let fruits= "apple"
let mango = fruits
mango = "banana"
console.log(mango);
console.log(mango);


let userone={
    email:"user@gmail.com",
    upi: "user@byl"
}
let usertwo= userone
usertwo.email = "user@gmail.com"
console.log(userone.email);
console.log(usertwo.email);


