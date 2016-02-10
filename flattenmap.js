/*
Write a function that takes a hierarchical map
of properties and converts it to a single, flattened map,
with the different levels separated by a forward slash ('/').

For example, given an input such as this:
*/
var mess =
{
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
};
/*
return a new map:
*/
var shouldBe =
{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
};
/*

The passed in argument will always be an object, but it may be empty.
Make sure to correctly test for Arrays and nulls — they should
be left as is in the result. The only property types will be:

true
false
Numbers
Strings
null
Arrays
Functions
Nested Maps
Keys can be any string of characters, excluding the '/' character.

*/

var flatten = function(input) {

  var flat = {};

  var depthFirstRecurse = function( obj, currentKey ) {

    // If object is empty
    if ( Object.keys(obj).length === 0 ) {
      return;
    }

    for ( var key in obj ) {
      // If the value is another nested object
      if ( typeof obj[key] === 'object'
           && obj[key] !== null
           && typeof obj[key] !== 'function'
           && !Array.isArray(obj[key])) {
        // Call recursively
        depthFirstRecurse( obj[key], currentKey.concat(key, '/') );
      } else {
        // Add to flat
        flat[currentKey.concat(key)] = obj[key];
      }
    }

  };

  depthFirstRecurse(input, '');

  return flat;

};

var flattened = flatten(mess);
console.log( flattened );
console.log( "SHOULD BE" );
console.log( shouldBe );
