const promise1= new Promise(function(resolve, reject){
    // Do an async task
    //DB calls, cryptographic, network
    setTimeout(function(){
        console.log('Async task done');
        resolve(); // or reject() if there was an error
    },1000)
})
promise1.then(function(){
    console.log('Promise resolved');
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve();
    }, 1000)
})
.then(function(){
    console.log("Async 2 is resolved");
    
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "Prakash12@gmail.com"})

    }, 1000)
})
promise3.then(function(abcd){
 console.log(abcd);
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
 let error = false;
 if(!error){
    resolve({username: "Prakash", Password: "1234"})
 } else{
    reject("Error: Something went wrong");
 }
    }, 1000)
})
promise4
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Promise is settled, either resolved or rejected"); 
})

const promise5 = new Promise(function(resolve, reject){
        setTimeout(function(){
 let error = true;
 if(!error){
    resolve({username: "Javascript", Password: "1234"})
 } else{
    reject("Error: JS went wrong");
 }
    }, 1000)
})

async function consumePromise5(){
    try{
   const response = await promise5
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromise5()

// async function getAllUsers(){
//  try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/Users');
//     const data = await response.json()
//     console.log(data);
//  } catch (error) {
//     console. log("E:", error);
//  }
// }

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data);
})

.catch((error)=>{
console.log("E:", error);
})