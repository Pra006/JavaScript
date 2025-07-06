// const addtwonumber = function (num1, num2){
//     return num1 + num2;
// }
// console.log(addtwonumber(5, 10));

const addtwonumber = function (num1, num2){
    // let sum = num1 + num2;
    // return sum;
}
const result = addtwonumber(5, 10);
// console.log("Result: ", result);


function loginUsername(username= "hanuman"){
    // if(username === undefined){
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUsername())


function calculateCartPrice(...num1){
return num1
}
// console.log(calculateCartPrice( 7000, 8000, 9000, 10000));

const user = {
    name: "hanumanji",
    price:199
}
function handleObject(anyobject){
    console.log(`name is ${anyobject.name} and price is ${anyobject.price}`);
    
}
// handleObject(user);
handleObject({
    name: "sam",
    price: 1000
})
const mynewarray = [1, 2, 3, 4, 5];