//the way data is accessed and stored in memory that is how the datatypes are categorized
// Primitive Datatypes ( call by value)

// 7 types : String , number , boolean , null , undefined , symbol , bigint

// javascript is a dynamically typed language where we dont have to define the datatype of any variable and object

const value =  100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// false

const bigNumber = 237545755793946347848386n // use n in the end to represent the big numbers




// Non primitive (Reference type )

// array , objects , functions 

const heros = ["shaktiman"."naagraj", "doga"]

 let myObj = {
    name: "anushika",
    age: 21,
}
//anything inside curly brackets like a key value pairs is known as objects 
// storing imside a variable myObj


const myFunction =function (){
    console.log("hello world");
}

