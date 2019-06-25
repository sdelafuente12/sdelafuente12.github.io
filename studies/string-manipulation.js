/* STRING MANIPULATION 
STRING MANIPULATION IS THE ACT OF CHANGING A STRING WITH OPERATORS AND METHODS.
SAY YOU WANT TO FIND THE FIRST LETTER OF A GIVEN STRING, THE STRINGS LENGTH, OR
WHETHER THE STRING INCLUDES SOMETHING YOU'RE SEARCH FOR - STRING 
MANIPULATION IS IMPORTANT TO HAVE IN YOUR TOOLBOX. 
*/

/* STRING MANIPULATION WITH OPERATORS
IF YOU WANT TO JOIN STRINGS WITH OPERATORS THERE ARE NOT MANY TO CHOOSE FROM,
BUT THAT DOESN'T MEAN THEY AREN'T VERY 
USEFUL. FOR INSTANCE THE + OPERATOR WILL CONCATENATE STRINGS TOGETHER SO YOU 
CAN FORM A HUGE AMOUNT OF CUSTOMIZED 
SENTENCES WITH LITTLE EFFORT. 
*/

function sayHi(name){
    console.log('Hi' + ' ' + name + "!");
}

sayHi("sam"); // prints to console => 'Hi Sam!'

/*STRING MANIPULATION WITH METHODS
YOU'RE ABILITY TO MANIPULATE STRINGS BECOMES A LITTLE MORE FUN WHEN YOU START
TO USE METHODS. THERE ARE A GREAT MANY 
METHODS BUILT INTO JAVASCRIPT THAT BECOME VERY HELPFUL. 

HERE ARE JUST A FEW: 
.length => length of the string
.includes() => includes a substring
.indexOf() => index placement of that string 
.toUpperCase() => forces string to Upper Case
.toLowerCase() => forces string to Lower Case
.replace() => replace strings with new values
.split() => convert string into an array of strings
.repeat() => repeats a string for a determined amount of time
.match() => returns array of matching strings
.charAt() => returns character at that index
*/

//THE WAY YOU WRITE THIS CODE IS AS SIMPLE AS TAGGING THE .METHOD TO THE END OF 
//THE STRING AND POINTING IT IN THE RIGHT
//DIRECTION

var myString = 'Hi there!';

console.log(myString.length); // prints to console => 9
console.log(myString.includes('!')); // prints to console => true
console.log(myString.toUpperCase); // prints to console => 'HI THERE!'
console.log(myString.toLowerCase); // prints to console => 'hi there!'
console.log(myString.includes('!')); // prints to console => true; 
console.log(myString.replace('!', '?')); // prints to console => 'Hi there?'
console.log(myString.split('')); // prints to console => 
// [ 'H', 'i', ' ', 't', 'h', 'e', 'r', 'e', '!' ]
console.log(myString.repeat(3)); // prints to console => 
// Hi there!Hi there!Hi there!

//AND SO ON & SO FORTH!