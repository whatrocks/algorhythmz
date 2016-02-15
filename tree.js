var assert = require('assert');
// var Tree = function( val ) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// };
//
// Tree.prototype.addChild = function( val ) {
//
//   var newTree = new Tree(val);
//
//
//
// };

var tree = [
  "A",
  ["B",
    ["D", [], []],
    ["E", [], []]
  ],
  ["C",
    ["F", [], []],
    ["G", [], []]
  ]
];

// Destructuring!
var depthLog = function ( [node, left, right] ) {
  if (!node) {
    return;
  }
  console.log( node );
  depthLog( left );
  depthLog( right );
}

// With explicit stack
var depthLogStack = function ( tree ) {

  var stack = [tree];

  while ( stack.length ) {

    // Destructuring!
    var [val, left, right] = stack.pop();
    console.log( val );
    if ( right.length ) {
      stack.push(right);
    }
    if (left.length) {
      stack.push(left);
    }
  }
};

var breadthFirstLog = function ( tree ) {

  var queue = [tree];

  while ( queue.length ) {

    var [ val, left, right ] = queue.pop();
    console.log( val );
    if ( left.length ) {
      queue.unshift( left );
    }
    if ( right.length ) {
      queue.unshift( right );
    }

  }

};

console.log("TEST START!!12132");
// depthLog(tree);
// depthLogStack(tree);
breadthFirstLog(tree);
console.log("TEST END");
