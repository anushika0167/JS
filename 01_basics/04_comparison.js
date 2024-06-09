//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);
//console.log(2!=1);

//console.log("2">1);
//console.log("02">1);
 

// we avoid null and undefined conversions

console.log(null>0 );
console.log(null == 0);
console.log(null >= 0);


//the reason is that an equality check == check == and comparisons >< >= <= work differently.
// comparisons convert null to a number , treating it as 0 .
//thats why (3) null>= 0 is true  and (1) null>0 is false


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined <0);


// ===

console.log("2" === 2); // false bcoz it states them as different as "2" is a string

console.log("2"==2); // it will be true bcoz "2" it gets converted into a number