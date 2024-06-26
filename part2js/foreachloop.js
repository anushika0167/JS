//foreach is used in arrays 
//callback functions doesnt have any name ()=>{}



const coding = ['js', 'ruby', 'cpp', 'python', ' java']

// coding.forEach( function   (val){
//     console.log(val);
// } )





// coding.forEach( (val)=> {
//     console.log(val);
// })




// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)



// coding.forEach((val, index, arr)=>{
//     console.log(val, index, arr);
// })




const myCoding = [

    {
        languageName: 'javascript',
        languageFileName: 'java'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'java'
    },
  
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})









