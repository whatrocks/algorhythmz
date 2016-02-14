var assert = require('assert');

var Node = function(value) {
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
};

LinkedList.prototype.add = function(value) {

  var node = new Node(value);

  if ( this.head === null ) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }

};

LinkedList.prototype.remove = function() {
  var oldHead = this.head;

  if ( this.head ) {
    this.head = this.head.next;
    return oldHead.value;
  }
};

LinkedList.prototype.size = function() {

  var size = 0;

  for ( var _ of traverse(this) ) {
    size++;
  };

  return size;
};

LinkedList.prototype.delete = function(value) {

  for ( var [previous, current] of traverse(this)) {
    if ( current.value === value) {
      previous.next = current.next;
      return value;
    }
  }
};

LinkedList.prototype.repr = function() {
  var repr = '';

  for ( var [previous, current] of traverse(this) ){
    repr += current.value;
    if ( current.next ) {
      repr += '->';
    }
  }

  return repr;
};

LinkedList.prototype.find = function(value) {

  var count = 0;

  for ( var [previous, current] of traverse(this) ) {

    if ( current.value === value ) {
      return count;
    }
    count++;

  }

  return -1;

};

function* traverse(list) {
  var current = list.head;
  var previous = null;
  while (current) {
    yield [previous, current];
    previous = current;
    current = current.next;
  }
}

console.log("TESTS START");
var linky = new LinkedList();
assert.equal( linky.head, null, "Head should be null");
linky.add(5);
assert.equal( linky.head.value, 5, "OOPS" );
linky.add(6);
assert.equal( linky.head.value, 6, "OOPS" );
assert.equal( linky.remove(), 6);
assert.equal( linky.head.value, 5);
assert.equal( linky.remove(), 5);
assert.equal( linky.remove(), undefined);
assert.equal( linky.size() , 0 );
linky.add(5);
assert.equal( linky.size() , 1 );
linky.add(10);
linky.add(15);
assert.equal( linky.repr(), '15->10->5');
assert.equal( linky.delete(10), 10);
assert.equal( linky.delete(5555), undefined);
assert.equal( linky.repr(), '15->5');
console.log( linky.repr() );
linky.add(1000);
assert.equal(linky.find(5), 2);
assert.equal(linky.find(12312312), -1);
console.log("TESTS DONE");
