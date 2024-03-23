const user={
    userName:"Amar Bhau",
    price:969,

    welcomeMessage:function(){
       // console.log(`${this.userName},Welcome to Website`);
        //console.log(this);
    }
}

user.welcomeMessage()
user.username="Junior-G"
user.welcomeMessage() //values hard code hi isliye change ho gyi 

//console.log(this); //[this(current context) ki value node environment me empty  object ko refer kr rha hai,
//   aur browser me window object jisme sabse jyda global object h]

function cofee(){
    let username="Bhavan Bhai"
   // console.log(this.username); [context works only on objects not on  functions]
}

//cofee()

//FUNCTION DECLARATION SPECIALLY ARROW FUNCTIONS

// const cofee=function(){
//     let username="Jai Ho"
//     console.log(this.username);
// }

//ARROW FUNCTION

const cofee =  () => {
    let username = "hitesh"
   // console.log(this);  [UNDEFINED]
  // console.log(this.username); [EMPTY PARENTHESIS]
}

cofee()

const addTwo = (num1, num2) => {  //BASIC ARROW FUNCTION
    return num1 + num2  // curly barces me wrap karega to return statement (explicit retur jab return keyword lagana pdh rha h)
}

// const addTwo = (num1, num2) =>  num1 + num2 [IMPLICIT RETURN:(normal parthesises)mai man let hu reurn keyword likne ki jarurt nhi h]

// const addTwo = (num1, num2) => ( num1 + num2 ) another way to  write this function

//const addTwo = (num1, num2) => ({username: "hitesh"}) //object ko retur krne k liya  usko wrap kra hoga parenthesis me


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()