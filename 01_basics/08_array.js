//array
// in javascript arrays are resizable

const myArr = [ 6,1,2,3,4,5]
const myHeros= ['shaktiman','naagraj']

const myArr2 = new Array (1,2,3,4)

//console.log(myArr[0]);

// array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop(7)


//myArr.unshift(9)
//myArr.shift(9)

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

//const newArr = myArr.join()
//console.log(myArr);
//console.log(typeof newArr);


//******slice, splice **********


//console.log('A',myArr);
//const myn1 = myArr.slice ( 1,3)
//console.log(myn1);
//console.log('B',myArr);

const myn2 = myArr.splice(1,3)
//console.log('C', myArr);
//console.log(myn2);


//**********************array**********************



const marvel_heroes = ['thor', 'ironman','spiderman']
const dc_heroes = ['superman','flash','batman']

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

//marvel_heroes.concat(dc_heroes)
//console.log(marvel_heroes.concat(dc_heroes));


const all_heroes = [...marvel_heroes,...dc_heroes]

//console.log(all_heroes);



const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)


//console.log(real_another_array);


console.log(Array .isArray("hitesh"))

console.log(Array.from('hitesh'))

console.log(Array.from({name:'hitesh'}));  // interesting case

let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1,score2,score3));

























