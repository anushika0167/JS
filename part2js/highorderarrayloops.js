// for of 

// ["","",""]
//[{},{},{}]



const arr = [ 1,2,3,4,5]
for (const num  of arr) {
   // console.log(num);
}



const greetings = "hello world!"

for (const greet of greetings) {
 //   console.log(`"each character is ${greet}"`);
}


//MAPS ( known for unique and orderly values)

const map = new Map ()
map.set ('IN', "India")
map.set ('USA',"united states of america")
map.set('fr',"France")
//console.log(map);




for (const [key, value] of map) {
   // console.log(key, ':-',value);
    
}




const myObject = {

   ' game1': 'NFS',
   'game2': 'spiderman'
}

for (const [key, value] of map) {
    // console.log(key, ':-',value);
     
 }







