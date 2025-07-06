let a =100

if(true){
let a = 10;
const b = 20;
// console.log("Inner: ",a); 
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const name = "hanuman";
    function two(){
        const website = "hanumanji.com";
        console.log(name);
    }
    // console.log(website); This will throw an error because 'website' is not defined in this scope
    two();
}
// one();

if(true){
    const username = "Prakash"
    if(username === "Prakash"){
        const website = "prakash.com";
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username); // This will throw an error because 'username' is not defined in this scope
console.log(addone(5))
function addone(num){
    return num +1
}

console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
