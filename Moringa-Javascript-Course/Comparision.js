// Strict

// Equality 
"42" === 42 //flase
42 === 42 // true
"42" === "42"// false

// Inequality
"42" !== 42 // true
42 !== 42 // false
"42" !== "42" // false  
// NB : Type conversion against strict equality operators .
1000 !== "1000" // true 
1000 === "1000" // false

null === undefined // false
"0" === false // false
// Loose 

// Equality : subject to type conversion .
"42" == 42 // true
42 == 42 // true
"42" == "42"// true
null == undefined // true
"0" == false // true

// Inequality  : Subject to type conversion
0 != "0"// false 
// [] != "" // false 
true != 1 // false
10001 != 1000 // true

// Comparing with use of relational operators 
100 > 90 // true
100 < 90 // false
100 >= 90 // true
100 <= 90 // false
// NB : Deal with consistency and meaning .
// Non-numers to numbers ...
"100" > 90 // true 

// Converting string to numbers 
let text = "19 years";
let age = parseint (ext,10);
age > 19 ;



