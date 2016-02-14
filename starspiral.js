/*
Write an algorithm to print a spiral of height and width n.
The spiral should wind clockwise from the top left, inwards to the middle.
A spiral of height/width 6, for instance, would look like:
******
     *
 *** *
 * * *
 *   *
 *****


n = 4

****
   *
 * *
 ***

n = 7
*******
      *
 **** *
 *  * *
 * ** *
 *    *
 ******

 */

var spiralMaker = function( n ) {

  var printMatrix = function( matrix ) {

    for ( var i = 0; i < matrix.length ; i++ ) {
      var row = '';
      for ( var j = 0; j < matrix[i].length; j++ ) {
        if ( matrix[i][j] === 1 ) {
          row += '*'
        } else {
          row += ' ';
        }
      }
      console.log(row);
    }

  };

  var buildMatrix = function ( n ) {

    if ( n === 1 ) {
      return [[1]];
    }

    var newTopRow = [];
    for ( var i = 0; i < n; i++ ) {
      newTopRow.push(1);
    }

    var previous = zeroPadMatrix(rotateMatrixRight(buildMatrix(n-1)));
    previous.unshift(newTopRow);
    return previous;

  };

  var zeroPadMatrix = function( matrix ) {
    var matrixCopy = Array.prototype.slice.call(matrix);
    for ( var i = 0; i < matrixCopy.length; i++ ) {
      matrixCopy[i].unshift(0);
    }
    return matrixCopy;
  };

  var rotateMatrixRight = function( matrix ) {

    var matrixCopy = Array.prototype.slice.call(matrix);

    // Transpose
    for ( var i = 0; i < matrix.length; i++ ) {
      for ( var j = 0; j < matrix[i].length; j++ ) {
        if ( j > i ) {
          var current = matrixCopy[i][j];
          var inverse = matrixCopy[j][i];
          matrixCopy[i][j] = inverse;
          matrixCopy[j][i] = current;
        }
      }
    }

    // Flip columns
    for ( var i = 0; i < matrix.length; i++ ) {
      for ( var j = 0; j < matrix[i].length / 2; j++) {
        var current = matrixCopy[i][j];
        var flip = matrixCopy[i][matrixCopy[i].length - 1 - j];
        matrixCopy[i][j] = flip;
        matrixCopy[i][matrixCopy[i].length - 1 - j] = current;
      }
    }

    return matrixCopy;
  };

  printMatrix(buildMatrix(n));

};

console.log("TEST START");
spiralMaker(10);
console.log("TEST END");
