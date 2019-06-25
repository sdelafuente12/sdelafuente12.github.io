/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can 
* use variables.  Variables
* are named identifiers that can point to values of a particular type, like a
* Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so 
* because once created, we can CHANGE the value (and type of value) to which
* they point.
*
* 1. To create a variable we use the keyword, var, followed by a name 
(id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization
(or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we
have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - 
//we cannot do this with constants
var myVariable = 1;
var myVariable = true;
myVariable = "someString";



/* DECLARATIONS AND ASSIGNMENTS

1. DECLARATIONS AND ASSIGNMENTS IN TERMS OF JAVASCRIPT ALLOW US TO POINT TO A
VALUE AND ATTACH THAT VALUE TO A VARIABLE.
FOR INSTANCE, IF I WOULD LIKE TO ASSIGN MY NAME TO A VARAIBLE IT WOULD LOOK 
SOMETHING LIKE THIS
*/ 

var name = "Samantha";



/* VAR LET AND CONST
*/


/*0. VAR

VAR IS SHORT FOR VARIABLE. ASSIGNING A VARIABLE LOOKS LIKE THIS.

*/

var num = 3;

//USING THE KEYWORD VAR IS CAN BE AN AMBIGUOS MOVE. IT DOES NOT SIGNIFY WHETHER 
//OR NOT THE VARAIBLE WILL BE CHANGED. 

/* 2. LET

LET CAN BE USED SIMILARLY TO THE KEYWORD VAR. BUT UNLIKE VAR, LET SIGNIFIES 
THAT THE VALUE WILL LIKELY CHANGE
ASSIGNING LET LOOKS LIKE THIS.
*/

let number = 4;

/*3. CONST

CONST IS SHORT FOR CONSTANT. LIKE THE NAME SUGGESTS, THIS VALUE WILL NOT CHANGE.
AND ALTHOUGH THIS VALUE WILL NEVER 
CHANGE - IT DOES NOT MEAN THIS VALUE IS HOISTED. ASSIGNING A CONST LOOKS LIKE 
THIS.
*/

const myCity = "New Orleans";

/*4. HOISTING 

HOISTING IS A - LETS CALL IT 'INTERESTING' - CONCEPT THAT I AM STILL TRYING 
TO COMPLETELY UNDERSTAND. THE REASON 
IT MIGHT BE DIFFICULT TO COMPLETELY GRASP, IS BECAUSE HOISTING ACTS DIFFERENTLY
ON var, let & const. SO LETS LOOK AT 
HOISITNG AND HOW IT AFFECTS EACH OF THOSE VARIABLES. 

HOISTING IN JAVASCRIPT ROUGHLY TRANSLATES TO BRINGING SOMETHING TO THE TOP.
WHETHER THAT MEANS THE TOP OF THE GLOBAL 
SCOPE, FUNCITON SCOPE, OR BLOCK SCOPE. SO BEFORE WE GET ANY FARTHER, 
LETS TALK ABOUT SCOPE.
*/

/* SCOPE IN JAVASCRIPT IS ESSENTIALLY WHAT YOU WOULD THINK IT IS. THE REALM IN 
WHICH SOMETHING OPERATES. GLOBAL SCOPE 
REFERS TO THE ENTIRETY OF CODE. FUNCTION SCOPE IS HE LIMITS OF AN INDIVIDUAL
FUNCTION. BLOCK SCOPE IS THE LIMITS OF 
CURLY BRACES {}.

HOISTING AFFECTS EACH VARIABLE DIFFERENTLY. IM TOLD THIS IS VERY IMPORTANT!!

WHEN let & const ARE USED THEY WILL BE HOISTED TO THE BLOCK SCOPE. 

*/

var hoisted = "global";

function functionScope() {
  let scope = "local";
  console.log (scope);     
}

functionScope();           // prints to console => 'local'
console.log(hoisted);     // prints to console => 'global'



