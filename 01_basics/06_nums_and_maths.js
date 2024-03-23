const score=545
//console.log(score);

const balance=new Number(100);
//console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(6));

const otherNumber=545.698
console.log(otherNumber.toPrecision(8))

const hundreds=1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-3.145));
console.log(Math.round(8.333));
console.log(Math.ceil(-1.44));
console.log(Math.floor(-5.66));
console.log(Math.min(-1,5,6,99));
console.log(Math.max(2,-7,5,9));
console.log(Math.random());
console.log((Math.random() * 22)+6);
console.log(Math.floor(Math.random()*10) + 1);


const min=56
const max=59

console.log(Math.floor(Math.random()*(max-min+1))+min);
