/* OPERATORS 

OPERATORS CAN BE USED FOR ALL SORTS OF THINGS. WHETHER ITS MATH, COMPARTISONS, 
OR LOGICAL, OPERATORS ARE TOOLS
TO EXPRESS OUTCOMES QUICKLY AND EFFECIENTLY.

1. ASSIGNMENT OPERATORS

ASSIGNMET OPERATORS DO WHAT YOU'D THINK, THEY ASSIGN. THEY SAY 'HEY! THIS IS 
THAT'. FOR INSTANCE:
*/

var myNum = 3; 

//THE ASSIGNMENT OPERATOR IN THIS CASE IS THE =

/*MORE ASSIGNMENT OPERATORS INCLUDE THOSE THAT PREFORM ARITHMETIC ON VALUES. 
THESE INCLUDE:
*/
// +=
var a = 10;
var b = 2;
console.log(a += b); //prints to console 12
// -+
console.log(a -= b); //prints to console 8
// *=
console.log(a *= b); //prints to console 20
// /=
console.log(a /= b); //prints to console 5

/* 
2.ARITHMETIC OPERATORS

ARITHMETIC OPERATORS ARE USED TO PREFORM MATHMATICAL TASKS. SOME ARITHMETIC
OPERATORS ARE:
*/

// + : ADDITION
var addition = 1 + 5; 
console.log(addition); // prints to console => 6
// - : SUBTRACTION
var subtraction = 7 - 3; 
console.log(subtraction); // prints to console => 4
// * : MULTIPLICATION 
var multiplication = 5 * 3; 
console.log(multiplication);//prints to console => 15;
// / : DIVISION
var division = 16 / 4; 
console.log(division); //prints to console => 4; 

/*SO WHEN YOU USE THESE OPERATORS IT'S AS FAST AS IF YOU WERE DOING AN ACTUAL 
CALCULATION!*/

function addMe(num1, num2) {
    return num1 + num2;
}

addMe(3, 2); // prints to console => 5

/*
3. COMPARISON OPERATORS
WOW OPERATORS ARE SO COOL! MOST OF THE TIME WHAT THEY DO IS RIGHT THERE IN THE 
TITLE. COMPARISON OPERATORS DO WHAT! 
YOU GUESSED IT! THEY COMPARE! 
WHEN THEY EXECUTE THEY WILL RESULT INTO TRUE OR FALSE STATEMENTS. 

SOME COMPARISON OPERATORS INCLUDE: 
> : GREATER THAN
< : LESS THAN 
>= : GREATER THAN OR EQUAL TO 
<= : LESS THAN OR EQUAL TO 
=== : STRICTLY EQUAL TO 
!== : NOT EQUAL TO 

*/

/* 4. LOGICAL OPERATORS 

LOGICAL OPERATORS WORK TO RESOLVE THE EQUALITY OF STATEMENT. WHY NOT USE 
ARITMETIC OPERATORS, YOU ASK? LET ME TELL 
YOU WHY. SAY YOU WANT TO SEE IF 10 IS GREATER THAN 9 && IF IT IS IS IT ALSO 
LESS THAN 100. INSTEAD OF WRITING 
A BUNCH OF CONDITIONAL STATEMENTS YOU CAN USE LOGICAL OPERATORS TO JOIN! HERE 
ARE A FEW:

&& : AND
|| : OR 
! : NOT

LET'S DO A FEW EXAMPLES WITH THIS ONE!
*/

function amIComfortable(num){
    if(num > 85 && num < 100) {
        console.log('No');
    } else if (num > 65 && num < 85) {
        console.log('Yes');
    } else if (num !== 0) {
        console.log('at least im not freezing');
    }
}

amIComfortable(68)// prints to console => Yes

/* 5. UNARY OPERATORS 
UNARY OPERATORS ONLY REQUIRE ONE OPERAND (the quantity on which an operation 
is to be done) TO PERFORM THEIR OPERATION.
SOME UNARY OPERATROS INCLUDE:
*/

// +
var addition = 5 + 7; 
console.log(addition); //prints to console => 12
// -
var subtraction = 18 - 9; 
console.log(subtraction); //prints to console => 9; 
// !
function isIt(num){
    if(typeof num !== 'number'){
        console.log(false);
    }
}
isIt('dog');//prints to console => false
// *
var multiplication = 6 * 2; 
console.log(multiplication);
// typeof
function isString(value){
    if(typeof value !== 'string'){
        console.log('not string');
    }
}
isString(3);// prints to console => 'not string'

/*6. TERNARY OPERATORS
TERNARY OPERATORS, LIKE UNARY OPERATORS, REFER TO THE QUANITY OF OPERANDS 
REQUIRED TO PERFORM THEIR TASK. THIS CAN
BE REFERED TO AS THE CONDITIONAL OPERATOR BECAUSE IT CHECK THREE CONDITIONS. 
FOR EXAMPLE: 
*/

function freeParking(hasPass) {
  return (hasPass ? "$0.00" : "$10.00");
}

freeParking(false); // prints to console => $10.00; 