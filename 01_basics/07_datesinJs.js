//Dates

let mydate=new Date()

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(typeof mydate);

//let mycreatedDate=new Date(1993,11,24)
//let mycreatedDate=new Date(1998,11,25,5,10)
//let mycreatedDate=new Date("1993-12-24")

//console.log(mycreatedDate.toLocaleDateString());

// let myTimestamp=Date.now();

// console.log(myTimestamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(myTimestamp/1000));

let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

 newDate.toLocaleString('default', {
     weekday: "long",
    
 })


