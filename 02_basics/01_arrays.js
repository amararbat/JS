//array

const myArr=[154,84,4815,485,875,44]
const myHeros=["Shaktiman","Junior-G","Hanuman"]

const myArr2=new Array(15,55,41,21,52,59) //Method to create Array

// console.log(myArr2[4]);

// console.log(myArr);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9) [add number oon top]
//myArr.shift()  //[only shift removes top element]

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr=myArr.join() //bind and converted into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);