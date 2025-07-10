 const temperature = 60

//  if(temperature > 80) {
//    console.log("It's a hot day");
//  } else {
//     console.log("It's not a hot day");
    
//  }

const score = 200
 if(score > 100){
    let  power = "superpower"
   // console.log(`user power:${power}`);
 }
// console.log(`user power:${power}`); // ReferenceError: power is not defined

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail  =true

if(userLoggedIn && debitCard){
    console.log("allow for purchase");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow for login");
}

//Switch case
const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        break;
}