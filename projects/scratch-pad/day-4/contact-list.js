// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
let newContact = {};
newContact.id = id;
newContact.nameFirst = nameFirst;
newContact.nameLast = nameLast;
return newContact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
    },
        addContact: function(contact) {
            contacts.push(contact);    
    },
    findContact: function(fullName){
        for (let i = 0; i < contacts.length; i++){
            let firstName = contacts[i].nameFirst;
            let lastName = contacts[i].nameLast;
            let user = firstName + ' ' + lastName;
            if(fullName === user) {
                return contacts[i];
            }
         return undefined;
        } 
    
          //iterate through our contacts array
            //check if the given full name  === the full name in a contact
            //a contact has an id, a firstname, and a lastname
            //fullName = first & last name
            //if the first and last name match the full name, return the objet
            //if there are no contacts in the list, that match the fullName, return undefined
        },
        removeContact: function(contact){
            for (let i = 0; i < contacts.length; i++){
                let firstName = contacts[i].nameFirst;
                let lastName = contacts[i].nameLast;
                let user = firstName + ' ' + lastName;
                if(user === contact.nameFirst + ' ' + contact.nameLast) {
                    var matchCon = contacts.splice(contact[i], 1);
                    return matchCon; 
                }
              
            }
            //input contact is object
            //output the contact array without the contact in the list
            //edgecase how can we remove one element from an array
            //find matching contact, remove matching contact
            //if there is no matching contact, do nothing
        },
        printAllContactNames: function(){
            let contactArray = [];
            for ( let i = 0; i < contacts.length; i++){
                let firstName = contacts[i].nameFirst;
                let lastName = contacts[i].nameLast;
                let username = firstName + ' ' + lastName;
                contactArray.push(username);
            } return contactArray.join('\n');
        }};
            //input nothing
            //output a string of our contact's full names, separated by a new line break /n
            //constraints the last full name should have not new lines added after it
            //edgecase e need newline characters
            
            //iterate over all contacts in the array
            //print the first and last names
            //separate each fullname with a newline character
            //we do not want to have a new line character after the last full name
        
    }





// YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
