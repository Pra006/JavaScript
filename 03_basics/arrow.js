const user ={
    name:"prakash",
    price: 100,

    welcomeMessage: function(){
        console.log(`${this.name} welcome to the website`); 
        // console.log(this);
        
    }
}
// user.welcomeMessage();
// user.name = "suresh";
// user.welcomeMessage();
// console.log(this);

// const  one = function(){
//     let name = "prakash";
//     console.log(this.name);// this does not refer to user object
    
// }
// one();
// console.log(this);


const  one = ()=>{
     let name = "prakash";
   console.log(this.name)
}
// one();

// const addtwo=(num1,num2) =>{
//  return num1 + num2;
// }
// console.log(addtwo(10,20))

// const addtwo=(num1,num2) =>  num1 + num2;
const addtwo=(num1,num2) =>  (num1 + num2)
console.log(addtwo(10,20))