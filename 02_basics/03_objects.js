//singleton

Object.create //constructor through

//oject literals

const mySym=Symbol("Key1");

const JsUser = {
    name: "Amar",
    "full name": "Amar Arat",
    [mySym]: "mykey1", //symbol usko obj ki keys me add karo aur print krke  dekha do
    age: 18,
    location: "Navi Mumbai",
    email: "amar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//ACCESSING VALUES

 //console.log(JsUser.full name);   // important(jab dot ki tarah leta h to string tarah acces krne ki jarurt nhi h, only path to aess it is through []) 
// console.log(JsUser["full name"]); 
// console.log(JsUser["name"]);
// console.log(JsUser["mySym"]);  //Important
// console.log(JsUser[mySym]);

JsUser["full name"]="Ram Prasad Bismal"
//console.log(JsUser["full name"]);

//Object.freeze(JsUser)  [values locked]

JsUser["email"]="amar@yahoo.in"
//console.log(JsUser.email);

//[Adding function to objects]

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
   console.log(`Hello JS user, ${this.name}`); //[string interpolation]
}

console.log(JsUser.greeting()); //[without () we will function k refrence)]
console.log(JsUser.greetingTwo());
