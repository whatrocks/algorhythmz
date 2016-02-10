/*

A robot is located at the top-left corner of a m x n grid
(marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time.

The robot is trying to reach the bottom-right corner of the grid

(marked 'Finish' in the diagram below).

How many possible unique paths are there?

*/

// Dynamic Programming solution
var numPathsDP = function(height, width) {

  // Create the matrix
  var pathsMatrix = [];
  for ( var i = 0; i < height; i++ ) {
    var row = [];
    for ( var j = 0; j < width; j++ ) {
      row.push(1);
    }
    pathsMatrix.push(row);
  }

  // Loop thru to calc the values
  for ( var i = 1; i < height; i++ ) {
    for (var j = 1; j < width; j++ ) {
      pathsMatrix[i][j] = pathsMatrix[i-1][j] + pathsMatrix[i][j-1];
    }
  }

  console.log(pathsMatrix);
  // Return the final
  return pathsMatrix[height - 1][width - 1];

};

console.log(numPathsDP(1,2), 1);
