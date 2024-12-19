# WELCOME TO FULL JAVASCRIPT COURSE WORK .{JS ELOQUENT}

## INTRODUCTION 
- Programming the art of creating a program or a set of instruction which tell a computer what to do 
- Programming language is artificial constructed language which tell a computer what to do .
- Javascript was introduced in the 1995 as away to add web page to NETSCAPE NAVIGATOR BROSWER
- Meaning of the word code -text which makes up a program  
- To program I hvae to master the art of learning how to read and understand code .

### VALUE TYPES AND OPERATORS 
- The main idea is to read modify and create data .
- To create a value you just need to invoke . Value my include number functions strings etc
  ### ...NUMBERS 
- Usually rep with the use of digits 
- How to write the short form for huge valued numbers [ ln 9 to 12 ]
  
  eg 2.54e3 ie simply means 2.54*10powerto3 = 2540
  ### ...ARITHMETICS  [ ln 21 to 24 ]
- Taking more than two valued numbers to produce a new number .
- Mathematical symbols in Js is known as operators.
- Examples of Operators 
  
  eg 

  - Addition + .
  - Subtraction - .
  - Multiplication * .
  - Division / .
  - Remainder % or Modulo .
-  NB : That Bodmas my apply in this arithmetic operators .
-  Operators with the same precedence 
    
    eg

    - [+ and - ]
    - [* , % and / ]
  ### ...SPECIAL NUMBERS 
  - These means that they dont behave like normal numbers .
  
    eg 

    - Infinity 
    - [-infinity]
    - NaN i.e Not a number [ ln 25 ]
   - NB : That the NaN mainly rp value which do not make any
          sense at all .
   ### ...STRINGS 
   - Mainly rp inside quotes thus rp pieces of text which 
     may be double single or back quotes .[ ln 28 to 32 ].
   - NB : Quotes have to match ... from start to the end .
   - How to place quotes within quotes you apply the use of backslash thus known as escaping of characters [ ln 34 ]
   - Strings can be concanated together with the use of + ... thus glues two strings together .[ ln 38-40 ]
   - How to embed string in template literals with the use of ${} .
   - Template literals this are backtick quotes .[ ln 42 to 44 ] .
   - Operators which take two value are called binary were those which take one value are called unary operators .
   - NB: that embeded sign cannot be used with typeof 
   - The subtraction is an example of a sign that is both unary and binary opertor
   ### ...Boolean Value
   - YES or NO Is represented with the True or False value is js .
   - To produce boolean we use the following operators 
 
        eg 

        - Comparision Operators which mainly include great less greater and lesser than 

        - ie 
          - [<] less than 
          - [>] great than 
          - [<=] less than or equal to 
          - [>=] great than or equal to 
          - [===] strict equality operator 
          - [!==] strict inequality operator 
          - [==] loose equality operator 
          - [!=] loose inequality operator 
           
        - Logical Operator 
        -  This include the following 

            eg 

                - and [&&]
                - or [||]
                - not [!]
                -    
  
   
   - NB : That these sign my be applyed to strings [ ln 59-104 ]    


    ### ...Empty value .
    - Value which carry no information  thus lack any meaning inside them 

        eg :

            -Null
            - Undefined 
  
# 


// December - 10 - 2024

## AUTOMATIC TYPE CONVERSION .
1 ) JS will accept almost everything fed to it via program .

  - This means that it will return odd values .
  - Check [ln 122 to 125 ]
  - Conclusion : JS convert value to the type it needs when we apply operators to the  "wrong" type of value thus called TYPE COERCION .
  As shown on [ ln 124 to 125]
  - NB : [ ln 127] - this occurs when JS cannot convert a wordish figure or any wrong value thus returns the value of NaN .
  - If we compare two values of the same type we use == but the most prefered method is === .
  - The main difference between == and === is that when you compare with == it performs type coercion which at time gives value the ar not completly equal to one another [ ln 130 - 131 ]

## SHORT CIRCUITING OF LOGICAL OPERATORS  .
2 ) How does JS relate logical operator to boolean type .
  
  - We have the && and ||
  - Where or return truthy value if ... [ ln ]
  
## PROGRAM STRUCTURE .
3 ) Where the real coding starts 
  
  - Always remember that the main purpose of any javascript program is to create value .
   
   -  EXPRESSION AND STATEMENT 

        - A fragment of code which produces any value is called Expression .
        - Expression is made up of sentences while Statement is makes up full sentences 
        - The semi colon show the end of a Statement thus may act as a fullstop in the end of a sentence .
     
   -  BINDING OR VARIABLES .
        - Binding allows JS to retain value we my picture it to be tentacles or a box depending on the keyword used .
        - Declare the variable , name the variable then initialize with plaacing a value within the variable .
        - [ ln 141 ] show that single keyword my contain multiple binding but remember to separate with a comma
        - The main difference between let and const .Let can be re-initialize while const holds onto the same value forever as long as it lives .
      
-  BINDING NAMES 
      - Keep an eye out forreversed name and also use of special characters excluding $ and _ .
      - One more thing donot start with number in thebindig name 
      
-  THE ENVIRONMENT 
      - Collection of binding and value which exist at a given time is called Environment .

-  FUNCTIONS 

      -  A pieceof program which is wrapped within a value .
      -  Arguement this are value we give to functions .
      -  The most common one is the console.log
      -  Anything which retrun a value is called a Return value 

- CONDITIONAL EXECUTION 
  - Branching depending on the situation at hand .
  - The conditional execution is created with the if keyword.
  -  if and elsse execute if condition holds true or other wise ..  

// December-11-2024
- WHILE & DO LOOPS 
  
  - A fine example is a program which output all even numbbers from 0 to  12 [ ln 170 to 178 ] this work but what if it less than 1000
  - A program allows one to writea piece of code multiple times thus less work this is known as looping ... which is a fine example of a control flow as shown in example [ ln 170 to 178 and 180 to 184]
  - The main difference btw  do and while loop is that a do execute it body just once then starts to test whether to stop only after the first execution .
 
 - INDENTING CODE 
  
    - Make ones code to stand thus amk work much easier to identify where a block start or ends .
  
 - FOR LOOP 
   
   - The for loop is a more shorter and comprehensive form of the while loop .
   -  DO MORE PRACTISE ON WHILE DO & FOR LOOP ...
   -  For loop code structure : 
   -  1 . It contain two major semicolon .
   -  2 . First colon initializes the for loop .
   -  3 . The second semicolon check if the loop should continue .
   -  4 . The an arguement which update each iteration .
  

- BREAKING OUT OF A LOOP 
 
    - 1 ) One of the most common ways is to place a lp condition which retruns false ...
    - 2 ) Using special statement called Break ...
    - 3 ) The Break helps to avoid the encounter of infinite loop .
    - 4 ) The continue keyword influence loop
  
  # DEC-12-2024

## UPDATE BINDING SUCCINCTLY 
- This means to make your keyword as clear as possible while using the fewest words .
- Hodling value based on the previous expression .
  
## USING SWITCH STATEMENTS 
- Switch was inherited from C/Java .

## CAPITALIAZATION 
- Writing of binding name based on one preference that is .[ln 269-272 ] 

## COMMENTS
- Comments help human reader to understand raw code which has been conveyed in a cryptic way .
- Meaning of the word comment this is a piece of text which is completely ingore by a computer .
- How we ignore text is via single or entire that is // or /**/

## FUNCTIONS 
- These is the bread and butter of JS .
- Wrapping piece of code in a value allows us to 
  a) Structure large programs
  b) Associate names with subprograms and sep these sub programs 
  c) Reduce repitition 
- It allows as to create new vocabulary in prose form .

## Defining Function .
- Creating a function requires a keyword word function (must contain a parameter) then a body madeup of parantheses 
- Function my contain many parameters or none at all
- Remember a return statement determines the alue in which the function returns .
- Intial value for the function parameter is given by caller function .

## Binding and Scopes 
- Visble binding in any part of a program is called scope .
-  
