# Dec_20_2024

# JS-VARIABLES 
## Meaning of Variable 
- Container which store value for later retrieval . Simply think of it like a box which store data e.g srings etc ... which  can be retrieved with use of assigned name or he label for the box .
## Rules in Naming Variables 
- The following are the rules used to name variables .
   
   1 ] Variable name ought to start with lowercase letters . Numbers is not a valid variable name .
   
   2 ] If the name contain long characters with spaces in he middle camelcase them ... and avoid use of snake cases .

   3 ] Avoid the use of javascript reversed word 

     Link to javascript reserved word : [text](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Reserved_keywords_as_of_ECMAScript_2015) , or future reserved word 
## Initializing a Variable
- Two way process .step 1 declare step 2 assign a value .
- To declare we use the let or const keyword 
-  Diffrence btw a let and const keyword is that you can reassign (change the value) let but not the const variable .
   code ln 12 to 14 .

   i.e (TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/ghost/Desktop/JAVASCRIPT-NODE.JS-JSON-FULL-COURSE/Moringa-Javascript-Course/tempCodeRunnerFile.js:2:8)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49)
## Retreving and changing the value of a variable 
- Code ln 16 to 20 .
- To retrieve code ln 19 ;
- To change code ln 20;
## When to use const,let or var .
## LET
_ I.F : Below yr 2014 variables were declare with just one single keyword which is [var].
- The main advantage of let over var is that let throws an error when we redeclare the same variable twice . code ln
   24 to 25 

    i.e 
    > let preOccupation = "intern"
    undefined
    > let preOccupation = "software devloper"
    Uncaught SyntaxError: Identifier 'preOccupation' has already been declared
    > 
    
- Another benefit is that we can re-assgin variable declarde with the let keyword . code ln 27 to 28 .
## CONST 
- NB : This ought to be the to go option for variable declaration .
- The why is because we cannot re-declare nor re-assign variable value or name . code ln 33 to 35 
    
    i.e 
    > const salary = 95000;
    undefined
    > salary = 100000;
    Uncaught TypeError: Assignment to constant variable.
    > 

#### RESOURCES :
MDN :[text](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#Variables)
MDN :[let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
MDN:[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
W3C:[jshistory](https://en.wikipedia.org/wiki/JavaScript#History)