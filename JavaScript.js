// Testing Rules of strict equality operator [use node].
'19'=== 19 // false .
19 === 19 // true .
true === 1 //false .
true === true // true .
null === undefined // false .
null === null // true .
undefined === undefined // true .
//Conclusion is they have to be the SAME Type and value .
// Testing Rules of strict inequality operator [use node].
'19' !== 19 // true .
19 !== 19 // false .
true !== 1 // true .... // so on 
// Conclusion is that it onlyreturns true if the values are NOT the same .