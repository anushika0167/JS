//for loop 


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is best no.");
        
    }
   // console.log(element);
}


for (let i = 0; i < 10; i++) {
       // console.log(`outer loop value: ${i}`);
       for (let j = 0; j < 10; j++) {
       // console.log(`inner loop value : ${j} and inner loop ${i}`);
   
   // console.log(i+ '*' + j + '=' + i*j);
}
}




let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  // console.log(element);  
}


//**********BREAK AND CONTINUE***********************  

// for (let index = 1; index <= 20; index++) {

//     if (index==5) {
//         console.log(`detected 5`);
//         break
//     }
//    console.log(`value of i is ${index}`);
    
// }





for (let index = 1; index <= 20; index++) {

    if (index==5) {
     //   console.log(`detected 5`);
       continue
    }
   //console.log(`value of i is ${index}`);
    
}




//************************  WHILE  and DO WHILE LOOP ******************************* 



// let index = 0 
// while (index <=10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }




// let myArray2 = [ 'superman', 'ironman' ,' captain america']

// let arr = 0 
// while (arr < myArray2.length) {
//    // console.log(`value is ${myArray2[arr]}`);
//     arr = arr + 1
// }




let score = 1 
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);


