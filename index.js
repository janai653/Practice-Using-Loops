/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for(let i = 0; i <= array.length - 1; i++){
    console.log(array[i])
  
  // YOUR CODE ABOVE HERE //
}

printArrayValues(myArray)







/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
for(let i = array.length - 1; 1 > 0; 1--) {

  console.log(array[i])
  // YOUR CODE ABOVE HERE //
}
printArrayValuesInReverse(myArray)





/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
     let array = []

     for(var key in object){

       array.push(key)
     }
     
     console.log(array)
  
  // YOUR CODE ABOVE HERE //
}
getObjectKeys(myobj)




/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
for(var key in object){

  console.log(key)
}
  // YOUR CODE ABOVE HERE //
}
printObjectKeys(myobj)




/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  console.log(Object.values(object1));
  
  // YOUR CODE ABOVE HERE //
}
getObjectValues(object1)






/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
console.log(object.printObjectValues(person))

  var myArray = Object.values(person);
  // YOUR CODE ABOVE HERE //
}

var person = {name:"sydney", age:14, city:"New orleans"};