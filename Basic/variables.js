let a = 67;
a = "Vidhi";
a = 4;
console.log(a);
console.log(typeof a);

let x = null;
console.log(typeof x);

let b = BigInt("456");
let y = Symbol("Hello");
console.log(typeof b);
console.log(typeof y);

//OBJECTS

const student = {
    name : "Vidhi Singh",
    age : 20,
    cgpa : 7.0,
    isPass : true
};
// we can update the value of keys like below
student.age = student.age + 1;

console.log(student);
console.log(typeof student);
console.log(student["name"]);// access key pair
console.log(student.age);

//Practice1

const product ={
    productName : "Parker",
    color : "black",
    price : 270,
    rating : 4,
    offer : 15
};
console.log(product);

//Practice2

const profile = {
    userName : "@sradhakhapra",
    name : "Shradha Khapra",
    post : 195,
    followers : 569000,
    following : 4,
    profession : "Entrepreneur"
};
console.log(profile);
console.log(typeof profile.name);