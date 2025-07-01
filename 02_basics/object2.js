// const tinder = new Object() // singleton object

const tinder = {} //  non singleton
 tinder.id="123abc"
 tinder.name="Prakash"
 tinder.isLoggedIn= false

// console.log(tinder);

const regularuser ={
    email:"sum@gmail.com",
    fullname: {
        Firstname: "Prakash", 
        lastName: "Kushwaha"
    }
}
// console.log(regularuser.fullname);

const obj1 ={1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

// const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));



const course = {
    coursename: "js in hbindi",
    price: "999",
    courseInstructor: "Prakash"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);




