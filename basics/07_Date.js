let MyDate =new Date()
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.toLocaleDateString());

// console.log(typeof MyDate);

// let MyDateCreated = new Date(2025, 5, 27)
let MyDateCreated = new Date("2025-06-27")
// console.log(MyDateCreated.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getTime());

newDate.toLocaleString("Default",{
    day:"numeric",
    weekday: "long"
})







