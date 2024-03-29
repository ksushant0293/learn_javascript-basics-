// primitive and non-primitive(reference type) data types

//primitive(7 tpyes)
// String, Number, Boolean, BigInt, Null, Undefined, Symbol

 const score =  100;
 const scoreValue = 100.3;

 const isLoogedIn = false;
 const outsideTemp = null;
 let userEmail;  

 const id = Symbol("123");
 const anotherId = Symbol("123");

 console.log(id);
 console.log(anotherId);
 console.log(id === anotherId);

 const bigNumber = 3455787654323456787234567876543n;
 console.log(typeof bigNumber);


//non-primitive(reference type)
// Array, Objects, Functions

const heros= ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "sushant",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);  // object
console.log(typeof myObj); // object
console.log(typeof myFunction); //object function

//************************************************************ *//
// memory
//stack(primitve), heap (NoN-primitve)
// whenever we use stack memory (ex: we decalre a variable) we get a copy
// in heap we get a reference of original value .

let myYoutubeName = "sushantYoutube"
let anotherName = myYoutubeName;
anotherName = "sushantSocialMedia";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user1@google.com",
    upi: "user1@ybl"
}

console.log(userOne);

let userTwo = userOne;
console.log(userTwo);

userTwo.email = "userTwo@yahoo.com";
console.log(userOne.email); // here value change in userone as changed in unsertwo because we get reference(original value)
console.log(userTwo.email);