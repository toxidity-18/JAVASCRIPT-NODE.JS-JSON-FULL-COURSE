// Primitive values 
0 ; // 0
"hey" ; // "hey"
false ; // false

// Writing block statements 
{
    ("hey am back")
    const aim  = "make money";
    0 ;
} // this is an  example of a block statement
// NB : Will return the value of the last evaluated expression .

// Checking truthy or falsy values 
Boolean (0);// false
Boolean ("hey") ; // true
Boolean (false) ; // false  
Boolean (null) ; // false
Boolean (undefined) ; // false
Boolean (NaN) ; // false
Boolean (1) ; // true
// Boolean function method ...

// How we use conditional statements 
// if statement 
if (condition){
    // block of code to be executed ...
}
// example 
const age = 21; // age = 19 ; Output becomes undefined ...
let rich ;
if (age >=20) {
    rich = true ;
}
console.log(rich)
// true ...

// else clause 
if ( condition){
    // block of code
} else{
    // block of code 
} 

// example else 
const year = 1 ;
let  grad ;
if (year >= 4){
    grad = true ;
} else {
    grad = false ;
}
grad 

// ternary expression 
// ? :
// const height = 1.79 ;
// let tall ;
// if ( height >= 1.79){
//    tall = true ;
// } else {
//     tall - false;
// }

// using ternary expressions 
const height = 1.79 ;
let tall ;
height >= 1.79 ?(tall = true) : (tall = false) ;
// true ....

//other way 
const primaryLanguage = "Javacript";z
 const Budget = intern >= 25000 ? "Has a potential to invest and make more " : "Below investment rate"
 Budget ;
 console.log(Budget);
 // output bcomes true ...
 const student = "Mark";
 const studentRecords = student === "Mark" ? "Student is a coochie lover": "Students is a alterboy";
 studentRecords ;
 console.log(studentRecords)
