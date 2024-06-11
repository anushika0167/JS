// packaging of my whole code is basically the use of functions 

//console.log("H");
//console.log("I");
//console.log("T");
//console.log("E");
//console.log("S");
//console.log("H");

function saymyname(){
     
    //console.log("H");
    //console.log("I");
    //console.log("T");
    //console.log("E");
    //console.log("S");
    //console.log("H");
}

//saymyname()



// values passed while defining a function are called parameter
//   function addtwonumbers (num1 , num2) {

//   console.log (num1 + num2)
//     }



function addtwonumbers (num1 , num2) {

    let result = (num1 + num2)
    //console.log("hitesh");
    return result 
 }


//addtwonumbers(3 , 4)
//addtwonumbers(3, "4")

//addtwonumbers(8, 9)   // values passed while calling a function are called as arguements 

const result = addtwonumbers(8,9)
//console.log("Result:" , result );

function loginUserMessage (username){
    if (username === undefined ) {
       // console.log("please enter a username ");
    }
    return `${username} just logged in `
}

//console.log(loginUserMessage("Hitesh"))

//console.log(loginUserMessage())


function loginUserMessage (username){
    if (!username ) {
       // console.log("please enter a username ");
        return
    }
    return `${username} just logged in `
}
//console.log(loginUserMessage())



function calculateCartPrice(...num1){
return num1

}

//console.log(calculateCartPrice(200,400,500, 2000 ,  700  ));


const user ={
    username: "hitesh",
    price:199
}

function handleObject (anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


handleObject
({
username:"sam",
price:200})
 



const mynewArray = [ 200, 400, 100, 600]

function returnSecondvalue  ( getArray){
    return getArray[1]
}
//console.log(returnSecondvalue(mynewArray));

console.log(returnSecondvalue([200,900,100,600]));




















































































