# COMPARISION OF JAVASCRIPT
- Create boolean expressions 
- NB : Strict and loose comparison .
- NB : We are advised to use strict since it is more accurate and safe while loose will reurn true even when the data type are not the same .
## Identify equality operator$
- Javascript contains 4 operators$
   
   i.e 
    - strict equality operator ===
    - strict inequality operator !==
    - loose equality operator ==
    - loose inequality operator !=
    - 
  ## Strict ...
  ### Equality :
     - Will return true if both value and data type match . Code ln 2 to 6 : Thus logical and accurate .
  ### Inequality :
     - Will return true if data do not match . Code ln 8 to 11 
     - NB : What make it accurate is that no type conversion take place . Code ln 12 to 13      
  ## Loose ...
  ### Equality :
     - This return True when both values match even if they are not of the same data type . Code ln 18 to 21 .
     - NB : Subject to type conversion . Code ln 18 .
  ### Inequality :
     - Returns true when the value dont match .  Code ln  27 to 31 .
  
## Comparing numbers with relational operators ...
- Mainly include 4 relational operator 
   
   i.e 

    - Greater than >
    - Greater than or equal >=
    - Less than <
    - Less than or equal <=
  
- NB : When we compare Non-number to numbers : Be careful since js tries to convert sring to numbers . Code ln 39 to 40 
### Converting string to numbers ...
- Mainly through this three methods :
  
  i.e 

     1 ] parseint(): 
     2 ] parseFloat()
     3 ] number()
   
   1 ] parseint() 
    
    - These convert string to an interger .
    - Take two arguments : string to convert
                           radix the base used in the mathematial system , which is always 10 .
     - Code ln  43 to 45 
   2 ] parseFloat()

    - These convert string to a point number .
 
 # Sunday 22 - dec 
 [CONERTING STRINGS TO NUMBERS ](https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/)

 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
 
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)