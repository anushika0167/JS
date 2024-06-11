// singleton

//object literals


Object.create // constructor method which creates singleton in return

 const mysym = Symbol('key1')


const user = {
  name: "hitesh",
  "full name" : "hitesh choudhary",
  age:18,
  [mysym]:"key1",
  location: 'jaipur',
  email:"hitesh@google.com",
  isLoggedIn: false,
  lastLoggedIn:['monday','saturday']

}

//console.log(user.email);
//console.log(user['email']);
//console.log(user["full name"]);

//console.log(typeof user.mysym);
//console.log(user[mysym]);



user.email = "anushika@gmail.com"

//console.log(user.email)

//Object.freeze(user)

//console.log(user);


//***************function*************** 

user.greeting = function(){
  console.log("hello user");
}

//console.log(user.greeting());

//console.log(user.greeting);


user.greetingTwo = function () {
  console.log(`hello user, ${this.name}`);
}

//console.log(user.greeting());
//console.log(user.greetingTwo());

// *************object singleton ( constructor )********************

//const tinderUser = new Object()
 
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name= "sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser = {
  email:"some@gmail.com",
  fullname: {
    userfullname:{
      firstname:"hitesh",
      lastname:"choudhary"
    }
  }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);

//console.log(regularUser.fullname?.userfullname.firstname);



const obj1 = { 1: "a", 2:"b"}

const obj2 = {3:"a", 4:"b"}

const obj4 = { 5:"a", 6:"b"}

//const obj3 = {obj1 ,obj2 }

//const obj3 =  Object.assign({} , obj1 , obj2 , obj4 )
 const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);

const users =[{
  id:1,
  email:"hitesh.com"
},
{
  id:2,
  email:"MediaDeviceInfo.com"
},
{

},
{

}




]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));





//***************de structuring of objects*********************

const course = {
   coursename:  "js in hindi",
   price : "999",
   courseInstructor:"hitesh"
}

//course.courseInstructor

//const {courseInstructor}= course
//console.log(courseInstructor);

const { courseInstructor:Instructor}= course
console.log(Instructor);

//*******JSON*************** java script object notation




{
      "name": "hitesh",
      "coursename": "js in hindi ",
      "price": "free",
}

















