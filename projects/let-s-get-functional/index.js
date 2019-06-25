// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-sdelafuente');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array){
  
   let males =  _.filter(array, function(element, index, array) {
        if (element.gender === 'male') {
            return true; 
            
        }
    });
    
    return males.length;
      
  };



 var femaleCount = function(people){
   return _.reduce(people, function(femaleCount, person){
       if (person.gender === 'female'){
       femaleCount += 1;
       }
        return femaleCount;
   }, 0);
    //for every customer in the customer array
    //check if they are female
    //return the number of females
};

//     let femaleCount = 0;
//     _.filter(array, function(element, index, array) {
//         if (element.gender === 'female') {
//             femaleCount++;
            
//         }
//     });
    
//     return femaleCount;
      
//   };


var oldestCustomer = function(array){
    let oldestPerson = {name: null, age: 0};
_.filter(array, function(element, index, array){
    if(element.age > oldestPerson.age){
        oldestPerson = element;
    }
});
return oldestPerson.name;
};

//   let oldest = 0; 
//   _.reduce(array, function(element, index, array){
//       if(element.age[i])
//   })

    
    
    
    
//     let oldest = '';
// _.reduce(array, function(element, index, array){
//     if(element.age > seed) {
//      oldest = seed
//     } 
//     });
//     return oldest; 

//     let oldest = 0;
//     _.filter(array, function(element, index, array) {
//         if (element.age === 'male') {
//             oldest++;
            
//         }
//     });
    
//     return oldest;
//  }
//  }
 

var youngestCustomer = function(array){
        let youngest = {name: null, age: 100};
_.filter(array, function(element, index, array){
    if(element.age < youngest.age){
        youngest = element;
    }
});
return youngest.name;
    
};

var averageBalance = function(array){
    let average = _.reduce(array, function(prev, current){
        var newCur = Number(current.balance.replace(/\$|,/g,''));
        prev = prev + newCur; 
        return prev;
    }, 0);
    return average / array.length; 
};

var firstLetterCount = function(array, letter){
  
    let namesWithLetter = _.filter(array, function(element, index, array) {
        if (element.name[0].toUpperCase() === letter.toUpperCase()) {
            return true;
        }
    });
    
    return namesWithLetter.length;  
};

var friendFirstLetterCount = function(array, element, letter){
//iterate over customer array of object
var results = 0;
for(var i = 0; i < array.length; i++){
    if(array[i].name === element){
        for(var j = 0; j < array[i].friends.length; j++){
          
           if(array[i].friends[j].name[0].toLowerCase() === letter.toLowerCase()){
               results+= 1;
           }
        }
    }
}
  return results;  
};

// var firstLetter = []; 
// for(var i = 0; i < array.length; i++){
//     if (array[i].name === customer) {
//         for(var i = 0; i < array[i].friends; i++){
//             if(customer.friend[i][0] === letter){
//                 firstLetter.push(customer.friend[i]);
//             }
//         }
//     }
//     return firstLetter.length; 
// }
//find element.name property === CUSTOMER 

//iterate over friends array of CUSTOMER 

//count how many friends have names that start with LETTER (counter outside of loop)

//return that number 


var friendsCount = function(array, name){
   let friendList = [];

    _.each(array, function(cust, index, array) {
        _.each(cust.friends, function(friend, index, array){
            if(friend.name === name){
            friendList.push(cust.name);
            }
        });
    });
    return friendList; 
};

var topThreeTags = function(array){
    let tagCount = _.reduce(array, (count, customer) => {
     _.each(customer.tags, tag => {
       if (count[tag]) {
           count[tag]++;
       } else {
           count[tag] = 1; 
       }
         
     });
     return count; 
    },
    
    {}); 
   tagCount =  _.map(tagCount, (count, key) =>{
       return [key, count];
   });
   tagCount.sort((a, b) => b[1] - a[1]);
   tagCount = _.first(tagCount, 3);
   return _.map(tagCount, tag => tag[0]);
};

var genderCount = function(array){
    let gender = {};
    gender.female = femaleCount(array);
    gender.male = maleCount(array);
    gender.transgender =  _.reduce(array, function(prevPers, currPers, Index){
       if (currPers.gender === 'transgender'){
      return ++prevPers;
       }
        return prevPers;
   }, 0);
    return gender;
//     let genCount = {}; 
//   return _.reduce(array, function(Count, person){
//       if (person.gender === 'female'){
//       Count += 1;
//       genCount.female = Count;
//       }
//       if (person.gender === 'male'){
//           Count += 1; 
//           genCount.male = Count;
//       }
//       if (person.gender === 'transgender'){
//           Count += 1; 
//           genCount.transgender = Count;
//       }
//   }, {});
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
