// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    var array = [];
 if (start < end) {
for (var i = start; i <= end; i++){
    array.push(i); 
} 
} else if (start > end) {
for (var i = end; i <= start; i++){
  array.unshift(i);
}
}
return array;

// function range(start, end) {
//   var array = []
// while (start <= end) {
//   array.push(i) 
// }



//in the range function we need to create an empty array to store all the numbers in the range, then we need to create a loop that will return
//all the numbers in range from small to large if the start number is smaller than the end number, else the numbers should
//push onto the array in reverse with the start number first and the numbers getting smaller. 
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}