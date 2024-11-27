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

// Testing Rules of Loose Equality Operator [use node].
'19' == 19 // true
19 == 19 // true
null == undefined // true line 17 and 19 is due to it ability to perform type conversion .
true == 1 // true
// Conclusion is that it returns true if the values are equal after type conversion .
// Testing Rules of Loose Inequality Operator [use node]
'19' != 19 // false
19 != 19 // false
null != undefined // false
true != 1 // false
9000 != 90001 // true
// Conclusion is that it returns true if the values are NOT the same