if (true){
    let a =200
    const b=560
    var c=889
}

// console.log(a);
// console.log(b);
// console.log(c);


//{}isko he bolte h scope hr programming languages me

//let a=64
if (true){
    let a=10 //if k andar k block scope aur uske bahar k global scope
    const b=20
    //console.log("INNER",a);
}
// console.log(a);

function one(){ //chote bache bdao c icream mang skte h lekin bade log nhi mang skte un c,
    //yeha pe ONE sabse bda h aur two usse chota h
    //[child log parent ke variable ko acees kr pata h]
    const username="Amar"

    function two(){
        const website="navimumbai.com"
        console.log(username);
    }
    //console.log(website); [website kahaan acees kr rhe h iska scoop to khatam ho gya h]

    two()
}
  one()

  //else ke andar same kaam hota h

//   if(true){
//     const username="John Dua"
//     if(username==="John Dua"){
//         const website="gharChalo.com"
//         console.log(username+website);
//   }
//   console.log(website);  [website k scope nhi h yeha]
// }
// console.log(username); [username k scope nhi h yeha]

// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5));

// function addone(num){ [BASIC FUNCTION]
//      return num + 1
// }

//addTwo(5)[CHAL NHI RHA Q KI IT DEPENDS HOW ITS DEFINED  YAHA DECLARE K SATH VARIABLE ME HOLD BHI KIA H]
const addTwo = function(num){ //[EXPRESSION BHI BOL DIYA JATA]
    return num + 2
}
