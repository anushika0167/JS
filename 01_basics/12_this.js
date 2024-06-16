// this means current context



const user = { 
    username: "hitesh ", 
    price : 999,

    welcomeMessage : function(){

        //console.log(` ${this.username} , welcome to website `);

       // console.log(this);
    }
}

//user.welcomeMessage()
//user.username= "sam"
//user.welcomeMessage()

// this can only be used in objects 

//console.log(this);


//const chai = function {
   // let username= "hitesh"
   // console.log(this.username)
//}
//chai()

//   function chai() {
//   let username= "hitesh"
//   console.log(this.username)
//   }
//chai()

// ***********************arrow function******************************

//   const addTwo = (num1 , num2) => {
     
//   return num1 + num2 
//        }
//   console.log(addTwo(3 , 4));

//************implicit  return in arrow function****************
//const addTwo = (num1 , num2) =>( num1 + num2)



//************explicit retun in  arrow function**************8
//const addTwo = (num1 , num2) => {return ( num1 + num2)}
//console.log(addTwo(3,4));




//const addTwo = (num1 , num2) => ({username: "hitesh"})
//console.log(addTwo());


//const myArray =[2,3,4,5]


//myArray.forEach()








