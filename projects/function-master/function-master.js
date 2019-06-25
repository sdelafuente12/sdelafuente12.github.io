//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  var newArray = [];
for(var i in object){
   newArray.push(object[i]);
}
return newArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //var newArray = [];
  var newArray = Object.keys(object);
  return newArray.join(' ');
}





//   var newArray = [];
//   var newString = '';
//   newArray.push(Object.keys(object));
//   newString = newArray.join();
//   return newArray.split('');
// }

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var newArray = [];
 for(var key in object) {
    if(object.hasOwnProperty(key)) {
        newArray.push(object[key]);
    }
}   
    
 //var newArray = Object.values(object);
 var arr = [];
    for (var i = 0; i < newArray.length; i++) {
        if( typeof newArray[i] === 'string') {
        arr.push(newArray[i]);
        }
    }
  return arr.join(' ');  
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitStr = string.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var newString = object.name.charAt(0).toUpperCase() + object.name.slice(1);
 return "Welcome " + newString +'!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var newName = object.name.charAt(0).toUpperCase() + object.name.slice(1);
var newSpecies = object.species.charAt(0).toUpperCase() + object.species.slice(1);
return newName + " is a " + newSpecies; 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    for(var key in object) {
        if (object[key] === object.noises && object.noises.length > 0) {
            return object.noises.join(' ');
        }
    }
    
    return 'there are no noises';
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if(string.includes(word)){
    return true;
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
   if(!object.friends) {
       object.friends = [];
   }
    object.friends.push(name);

    return object;
}



//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  var friendsArray = object.friends;
  if (friendsArray === undefined){
    return false;
} else if (friendsArray.includes(name)) {
     
return true;  

}    

return false;

}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
 

    var notFriends = [];
      for(var i = 0; i < array.length; i++){
        if(!isFriend(name, array[i]) && name !== array[i].name) {
            notFriends.push(array[i].name);
}
        
} 
        
    return notFriends;
}
 
 
 
 
 
 
 
 
    // var nonFriends = []; 
    // for ( var i = 0; i < array.length - 1; i++) {
    //     if (!array.includes(name)) {
    //     nonFriends.push(name);
    // }

    //     return nonFriends;
    // }






//         var notFriends = [];
// for(var i = 0; i < array.length; i++){
//         if (name !== array[i]) {
//             notFriends.push(name);
        
//             } 
//         } return notFriends;


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {



if(object.hasOwnProperty(key)){
  object[key] = value;
//   return object; 
} else { 
 object[key] = value;
}
    return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    let remove = Object.keys(object);
    for (let i = 0; i < remove.length; i++) {
        if (array.includes(remove[i])){
            delete object[remove[i]];
        }
    }
}
    
// for (var i = 0; i < array.length; i++) {
//     if (Object.hasOwnProperty(array['i'])) {
//             delete object[array[i]];
// }
// }



// for (var i = 0; i < array.length; i ++) {
//  if (Object.hasOwnProperty(object)){
//      delete object['i']; 
// }

// }
// return object; 
// }

//     for(var i = 0; i < array.length - 1; i++) {
//       if object['i'] > 0 
        
       
//       delete object['i'];
//     }
    



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
let unique = [...new Set(array)];
return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}