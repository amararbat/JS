// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //[ named IIFE]
    console.log(`DB CONNECTED`);
})(); //iife ivoke ho gya leki usko pta nhi rukna kahan h isliye ; jaruri h usko end krne ki

//Arrow function ki tsrsrh likna with parameter
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')