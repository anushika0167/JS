//accumalator is an empty value 


// const  myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc , currentvalue) {
   
//     console.log(`acc:${acc} and cuurentvalue: ${currentvalue}`);
//     return acc + currentvalue
// }, 0)


// console.log(myTotal);



const  myNums = [1,2,3]

const myTotal = myNums.reduce( (acc , curr) => acc+curr,0)


console.log(myTotal);


const shoppingCart = [
    {
      item:'js course',
      price:2999
    },
    {
        item:'py course',
        price:999
      },
      {
        item:'mobile dev course',
        price:5999
      },
      {
        item:'data science course',
        price:12999
      }
]


const pink = shoppingCart.reduce ((acc,item)=> acc + item.price,0)
console.log(pink);







































