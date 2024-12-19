// // // // How to produce boolean values 
// // // // Comparison with binary operators .
// // // console.log (3 > 2) ;// true
// // // console.log (3 < 2) ;// false 
// // // console.log ("samuel" > "sammy")//true .. and so on
// // // console.log ("A" > "a") ;//false ... read on the NB In README-3
// // // console.log(NaN == NaN) ;//false ...README.MD
// // // console.log ("finest coder of them all be an replacable")
// // // Numbers 
// // // 1
// // // 2
// // // 13
// // // This is how we rep numbers in javascript .
// // // Intro to fractional numbers 
// // // 3.5
// // // 4.78
// // //How to write big numbers in javscript
// // 25e3
// // 2.54e3
// // //-> The e is used to shortform values of huge or large numbers 

// // // Practical examples of arithmetic operations {All test are conducted with use of Node}
// // 100+4*11 // common equation 
// // (100+4*11) // note how we add paranthenses and how it affects the value produced .
// // 314 % 100 // this is the modulo .
// // 0/0 // testing one special number 

// // // Example of strings 
// //  'Hey am a developer'
// //  "Hey am a developer"
// //  `Hey am a developer`

// //  // How to escape characters .
// //  'Hey we are dev\'s'
// //  'Hey am a software developer , who work\'s with laptops'
// //  // -> We use backslash to escape characters .

// //  // String Concatenation 
// // "con"+"ca"+"te"+"nate";
// // //->concatenate simply means to glue two strings together .

// // // How to embed in template literals
// // `Half of 1000 is ${1000/2}`;
// // let name = "Samuel";
// // `My name is ${Samuel}`
// // //-> the character will get embeded and returned as a string .

// // // Example of unary  operator is typeof ...
// // typeof 4.5;
// // typeof 'Hey';
// // typeof 456;
// // //-> this main example of unary operator 

// // // Boolean Value 
// // // comparision operator
// // 3<2;
// // 2>3;

// // // using comprasion operator on string value 
// // "Code" < "Show"
// // "Show" > "Code"
// // "Change" <= "Adaptation"
// // // Test those ln of code with use of node .
// // "Z" < "a"
// // "code"<"Programming"
// // // Testing Rules of strict equality operator [use node].
// // '19'=== 19 // false .
// // 19 === 19 // true .
// // true === 1 //false .
// // true === true // true .
// // null === undefined // false .
// // null === null // true .
// // undefined === undefined // true .
// // //Conclusion is they have to be the SAME Type and value .
// // // Testing Rules of strict inequality operator [use node].
// // '19' !== 19 // true .
// // 19 !== 19 // false .
// // true !== 1 // true .... // so on 
// // // Conclusion is that it onlyreturns true if the values are NOT the same .

// // // Testing Rules of Loose Equality Operator [use node].
// // '19' == 19 // true
// // 19 == 19 // true
// // null == undefined // true line 17 and 19 is due to it ability to perform type conversion .
// // true == 1 // true
// // // Conclusion is that it returns true if the values are equal after type conversion .
// // // Testing Rules of Loose Inequality Operator [use node]
// // '19' != 19 // false
// // 19 != 19 // false
// // null != undefined // false
// // true != 1 // false
// // 9000 != 90001 // true
// // // Conclusion is that it returns true if the values are NOT the same

// // // Compare with relational operators [use node]
// // 88 > 9 //true 
// // 9 < 88 // true
// // 9 <= 9 // true
// // 88 >= 88 // true
// // // Conclusion , just understand the meaning of each symbols .
// // // Testing the logic of string conversion 
// // 88 <= "88" // true 
// // 88 <= "hello" // false
// // // Conclusion string type conversion take place if the alue within the string is a number .


// // // How to use logical operators 
// // // && binary will only result to true only if both value are equal .
// // false && true ;
// // true && true ;
// // // || binary will only result to true if only the value 
// // false || true 
// // true || true 
// // // ! unary statement thus flip the value given to it from either true or false 
// // // keep note on what precede what and what .

// // // tenary operator 
// // true ? 45 : 0/5 ;


// // // December - 10 - 2024
// // // AUTOMATIC TYPE CONVERSION 
// // 8 * null //-> 0
// // 8 * undefined // -> NaN 
// // "5" - 1 // -> 4 The 5 is converted from a string to  number 
// // "5" + 1 // -> 51 will be inform of a string "51" the 1 ``` to a string thus performing string concatenation 
// // "five" + 1
// // "five" - 1 // - > NaN value due to inability to convert wordish figure to a number .
// // 5 == 5 // this is comparing two values of the same type .
// // null == undefined
// // 0 == "0" //-> type coercion take place thus returning a value of true .
// // 0 === "0" // -> the outcome becomes false 

// // // SHORT CURCUITING OF LOGICAL OPERATORS 
// // "maggie" || 796374161 

// // //BINDING / VARIABLES 
// // let debt = 1000 ;
// // debt = debt - 250 ;
// // console.log (debt) ;
// // let one = 1 , two = 2 
// // two = 3 , one =  4 ;
// // let Name = "Samuel"
// // const greetings = "Hey , how are you ";
// // console.log( Name + greetings );
// // console.log(Math.max(2,4));
// // console.log(Math.min(2+100));
// // // Math.max or min represent the most maximum and minimum value .

// // //Conditional Execution 
// // // let theNumber = Number(prompt("Pick a number"));
// // // if (!Number.isNaN(theNumber)) {
// // // console.log("Your number is the square root of " +
// // // theNumber * theNumber);
// // // }

// // // if statement 
// // // if (1+1 == 2) = console.log ('It\'s true ') ;
// // let num = 25 ;
// // if (num < 10 ){
// //     console.log('Too short');
// // } else if (num > 15){
// //     console.log("medium");
// // } else {
// //     console.log("large")
// // }

// // // December - 11 - 2024 
// // //While and do loops 
// // // fine example
// // console.log(0);
// // console.log(2);
// // console.log(4);
// // console.log(6);
// // console.log(8);
// // console.log(10);
// // console.log(12);
// // // // this will output all the even number in btw 0 to 12 ...
// // // same example but with this ...
// // // let number = 0 ;
// // // while (number <= 12) {
// // //     console.log(number);
// // //     number= number+2 ;
// // // } //-> simplicity applied .
// // // Another top eg 
// // let result = 1;
// // let counter = 0;
// // while (counter < 10) {
// // result = result * 2;
// // counter = counter + 1;
// // }
// // console.log(result);
// // // Do loop
// // let yrNm ;
// // do {
// //     yrNm = prompt ("Who are you!")
// // } while (!yrNm);
// // console.log(yrNm)
// // // re do of the first while loop 
// // // finding all the even number in btw 1 to 12
// // // let number = 0 ;
// // // while (number <= 12) {
// // //     console.log(number);
// // //     number= number+2 ;
// // // } 
// // // Working with for loop

// // for ( let number = 0; number <= 12; number = number + 2 ) {
// //     console.log ( number )
// // }

// // Code master

// // Code which computes 2 to the 10 th power using for loop
// let population = 1 ;
// for ( count = 0 ; count <= 10 ; count + 1 ) {
//     population = population * 2 ;
// } 
// console.log ( population ) ;

// // Breaking out of a loop
// // finding a number which is great/ equal to 20 and divisible by 7 
// for ( let number = 20 ;mumber >= 20 ; number = number + 2) {
//     if ( number % 7 == 0 ){
//         console.log (number) ;
//         break ;
//     }
// }  // - > resulting answer becomes 21 
// // 

// // Dec-12-2024

// // Binding succinctly 
// counter = counter + 1
// counter += 1 // example of binding succinctly
// counter = counter - 1 
// counter -= 1 // ```
// counter = counter * 2
// counter *= 2 // ```
// counter = counter / 2
// counter /= 2 // ```
// // -> Succinctly means to less or least words as possible .
 
// for ( age = 0 ; age <= 12 ; age += 1 ) {
//     console.log (age)
// }

// // look at the meaning of 
// counter ++
// counter --

// //Switch statement 
// switch ( prompt ( "What is the weather like ?")) {
//     case "RAINY":
//         console.log ("Remind me to brind a rain coat");
//         break ;
//     case "WINDY":
//         console.log ("Make sure to keep warm !");
//         break ;
//     case "SUNNY":
//         console.log ("Don\'t wear heavy clothes");
//         break ;
//     default :
//          console.log ("Unknown weather type")
//          break ;
// }

// //Capitalization ..
// fuzzylittlecreapuff
// FuzzyLittleCreamPuff
// FuzzyLittleCreamPuff
// fuzzy_little_cream-puff 

// //COMMENTS ...
// // comments
// /*coments*/

// let abc = "abc"
//     console.log(abc.length)




//Functions

const square = function (x){
    return x * x
};
    console.log(square(12));
    // give you 144

// square of 100
const double = function (z) {
    return z*z*z ;
};
    console.log (double(25));
//Example of function with no parameters 
const makeNoise = function () {
    console.log ("Pling!");
};
 makeNoise();

 //More than 2 parameters 
 const power = function ( base , exponent){
    let result = 1;
    for (let count=0 ; count < exponent ; count ++)
        return result ;
 };
  console.log (power ( 2 , 10));
  