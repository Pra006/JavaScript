const A = ["thor","Prakash","Aakash"]
const B = ["sunil","Dipak","Ronit"]

// A.push(B)
// console.log(A);

// const all =A.concat(B)
// console.log(all);


// const all_new = [...A, ...B]
// console.log(all_new);

const another_array = [1,2,3,[0,9],5,6,[3,1,5]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Prakash"));
console.log(Array.from("Prakash"));
console.log(Array.from({name:"Prakash"})); //interesting

let Score1=100
let Score2= 200
let Score3 = 300

console.log(Array.of(Score1,Score2,Score3));


