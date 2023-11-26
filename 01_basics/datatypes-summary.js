// #primitive

// 7 types : String, number, boolean, null, undefined,symbol,BigInt

const score = false
const scoreValue = 100.3

const isLogggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

 
console.log(id===anotherId);


// const bigNumber = 34576778556748n
//Referance (Non primitive)

//Array , Objects,functions

const heros = ["shaktiman","naagraj", "doga"]
  let myObj = {
    name: "ayush",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);