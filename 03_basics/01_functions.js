function sayMyname(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("R");
}
//sayMyname(); [FUNCTION K REFRENCE(sayMyname) USKO CALL KRNE K LIA]

// function addTwoNumbers(num1,num2){ //[num1 num2 are PARAMETERS]
//     console.log(num1+num2); [CONSOLE LOG  MATLAB WO NHI KI WO FUNCTION WO VALUE RETURN BHI KAREGA]
// }
//addTwoNumbers(12,6) [12, 6 are ARGUMENTS]


// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);
function addTwoNumbers(number1, number2){
                          //Important
    let result = number1 + number2
    return result
    //return number1 + number2 (DIRECT RETURN KRDO)[RETURN K BD KOI KAAM NHI KAREGA FUNCTION]
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

//VALUES LENE KE DIFFRENT TAREEKA
function loginUserMesssage(username='rama bhau'){ // [to avoid below situtaion default value dena hoga,ab username me jayengi q ki kabhi uski value undeifned nhi hogi]
    if(!username){     // [ In JS "" & undefined ko mann liya jata h ki wo false value h usko ulta kr do ! laga kr ie username jo undefined uska ulta kr de]
        console.log("Please Enter Username");
        return
    }
    return `${username} just logged in`;

}
//log(loginUserMesssage("AMAR"));[KUCH BHI RUN NHI  HOGA Q KI FUNCTION RETURN KOI VALUE BOLI NHI PRINT KRNE KO]
//console.log(loginUserMesssage("AMAR"));  [KOI VALUE PASS NHI KRGE TO UNDEFINED AAYENGA]

function calculateCartPrice(...num1){ //REST OPERATOR IS USED
    return num1;
}
function calculateCartPrice(val1,val2,...num1){ //VAL1=265,VAL2=458 BKI CHEEZ REST OPERATOR ME JAYENGI
    return num1;
}

console.log(calculateCartPrice(265,458,9961,44123)); //ARRAY ME ADD HO JAYENGE

//OBJECT KO FUNCTION PASS KRNA
const user={
    username:"Amar",
    prices:1365
}

function handleAnyObject(anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`); //WE HAVE TO CHECK TYPE SAFETY price h ki nhi object me
}

handleAnyObject(user)


//direct object pass kr dene wala method
handleAnyObject({
    username:"Shaktimann",
    prices:7000
})

//ARRAY PASS KRKE DEKTE H

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){ [getArray  parameter k namm h]
//     return getArray[3]  //[myNewArray k agae return mat lagana q ki wo generic naam h kuch bhi ho skta tha dhyaan rkna h mera pass kya 
//kya argument aa rha h usko return krnna h]
// }

// console.log(returnSecondValue(myNewArray));
//[direct pass krna arrray ko]
// console.log(returnSecondValue([200, 400, 500, 1000]));