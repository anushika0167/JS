//Javascript execution context 


//     3 types 
//global execution context 
//function execution context 
//eval 
// memory creation phase or creation phase (memory is allocated here )
//execution phase 


let val1= 10 
 let val2= 5 
  function addNum (num1, num2){

    let total = num1+ num2 
    return total
  }

let result1 = addNum (val1 , val2)
let result = addNum(10, 2)


//step1 globalexecution 
      //  we use "this"

//step 2 memory phase
 //      val1  - undefined
//       val2 - undefined 
//       addNum - definition 
//       result1 - undefined
//       result2 - undefined

//step3 execution phase 
  //     val1 - 10
  //     val2 - 5 

 //      addNum- new variable environment + execution thread 

 //      inside this we will have separate memory phase and execution context inside which the sum will take phase

 //      and after returning the total it gets deleted 













