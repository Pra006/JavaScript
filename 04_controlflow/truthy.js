const Email = []
if(Email){
    console.log("Email is truthy");  
}
else {
    console.log("Email is falsy");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// //truthy values
// [], "0", "false", {}, -1, 1, BigInt 1n, function() {}, Symbol("symbol"), new Date()

//Nullish coalescing operator (??) null undefined
let user
// user = 5 ?? 10
// user = null ?? 10
// user = undefined ?? 10

user = null ? 10 ?? 50 : 50
console.log(user);

 // Ternary operator

//  comdition ? true : false

const iceTeaprice = 100
iceTeaprice <=50 ? console.log("expensive") : console.log("cheap");