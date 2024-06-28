//****************************************FILTERS*************************************************** */


//  const coding = ['js', 'ruby', 'cpp', 'python', ' java']

//    const values = coding.forEach((item)=>{
// console.log(item);

// })

// console.log(values);




// const myNums = [1,2,3,4,5,6,7,8,9,10]

//   const newNums = myNums.filter((num)=> num> 4)

// console.log(newNums);





const myNums = [1,2,3,4,5,6,7,8,9,10]

//   const newNums = myNums.filter((num)=> { 
//     return num> 4 
// })


// const newNums =[]
// myNums.forEach((num)=>{
//     if (num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);






const books = [
    { title:'book1',genre:'fiction',publish:'1981', edition: 2004},
    { title:'book2',genre:'Non-fiction',publish:'1992', edition: 2008},
    { title:'book3',genre:'History',publish:'1999', edition: 2007},
    { title:'book4',genre:'Non-fiction',publish:'1989', edition: 2010},
    { title:'book5',genre:'science',publish:'2009', edition: 2014}, 
     { title:'book6',genre:'fiction',publish:'1987', edition: 2010},
     { title:'book7',genre:'History',publish:'1986', edition: 1996},
     { title:'book8',genre:'science',publish:'2011', edition: 2016},
     { title:'book9',genre:'Non-fiction',publish:'1981', edition: 1989}
   
]

// const Userbooks = books.filter((bk)=>{ return bk.genre  === 'History'})
//console.log(Userbooks);


// const Userpublish = books.filter((bk)=>{return bk.publish>=1995})

// console.log(Userpublish);



const Userpublish = books.filter((bk)=>{return bk.publish>=1995 && bk.genre === 'History'})

console.log(Userpublish);
















































































































