const tinderUser=new Object() //singleton object
//const tinderUser={}   NON SINGLETON OBJECT

tinderUser.email="AMAR CHOUDHARY"
tinderUser.phone=123456789
tinderUser.bio="Coder H Bhai"

//console.log(tinderUser);

//OBJECTS KE ANDAR OBJECTS
const regularUser={
    email:"amar@meta.in",
    fullname:{
        userfullname:{
       firstname:"Amar",
       lastname:"Arbat"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname); //OPEN NESTING
//console.log(regularUser.fullname?.userfullname.lastname);  //OPTINAL CHAINING


// // console.log(regularUser.fullname.userfullname.firstname);


//[MERGING OBJECTS]
const obj1={1:"kal",2:"hazur"}
const obj2={3:"nahana",4:"hoga"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2); [{}=TARGET,obj1 and obj2 are sources]
const obj3={...obj1,...obj2} //spread  operator
//console.log(obj3);


//values from DATABASE
const users=[
    {
    id:121,
    email:"jai@gmail.com"
    },
    
    {
        id:121,
        email:"jai@gmail.com"
    },

    {
        id:121,
        email:"jai@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

//[OUTPUT VALUES MILTI H USKA DATATYPE ARRAY]
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); [returns array of arrays]

// console.log(tinderUser.hasOwnProperty('bio')); //to check if its present or not


//OBJECT DESTRCTURING
const course={
    coursename:"JS ",
    price:565,
    courseInstructor:"Amar Bhai",
    courseDuration:546

}

course.courseDuration

const{courseInstructor:instructor}=course
//console.log(courseInstructor);
//DESTRCTURE KARKE SAME VALUE AAYENGI ({} MATALB DESTRCUTRING KI JAA RHI H)
console.log(instructor);

// { VLAUES FROM API IN JSON STRCTURE
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// [
//     {},
//     {},
//     {}
// ]

