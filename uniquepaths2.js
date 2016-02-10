/*

Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids.

How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,

There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]

The total number of unique paths is 2.

Note: m and n will be at most 100.

*/

// Recursive solution
var paths = function( grid ) {

  if ( grid === undefined ) {
    return 0;
  }

  // Terminal condition
  if ( grid.length === 1 ) {
    console.log("terminal condition");
    return 1;
  }

  // Look right for obstacle
  var rightObstacle = false;
  if ( grid[0].length > 1 && grid[0][1] === 1 ) {
    console.log("obstacle right");
    rightObstacle = true;
  }

  // Look down for obstacle
  var downObstacle = false;
  if ( grid.length > 1 && grid[1][0] === 1 ) {
    console.log("obstacle down");
    downObstacle = true;
  }

  // Kill the first column
  if ( !rightObstacle && grid[0].length > 1) {
    var movedRightGrid = [];
    for ( var i = 0; i < grid.length; i++ ) {
      var row = grid[i].slice(1);
      movedRightGrid.push(row);
    }
  }

  // kill the first row
  if ( !downObstacle && grid.length > 1 ) {
    var movedDownGrid;
    movedDownGrid = grid.slice(1);
  }

  if ( !rightObstacle && !downObstacle ) {
    return paths(movedRightGrid) + paths(movedDownGrid);
  } else if ( !rightObstacle ) {
    return paths(movedRightGrid);
  } else {
    return paths(movedDownGrid);
  }

};

// Recursive works for this small example, but dies on huge problems
// console.log(paths([
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]));

// Dynamic Programming Solution

var pathsDP = function(grid) {

  var copyGrid = Array.prototype.slice.call(grid);

  // Dead on arrival
  if ( copyGrid[0][0] === 1) {
    return 0;
  }

  // No way to win
  var lastRow = copyGrid[copyGrid.length - 1];
  if ( lastRow[lastRow.length - 1] === 1) {
    return 0;
  }

  for ( var i = 0; i < copyGrid.length; i++ ) {
    for ( var j = 0; j < copyGrid[i].length; j++ ) {
      if ( copyGrid[i][j] === 1 ) {
        copyGrid[i][j] = null;
      }
    }
  }
  copyGrid[0][0] = 1;

  // fill it out
  for ( var i = 0; i < copyGrid.length; i++ ) {
    for ( var j = 0; j < copyGrid[i].length; j++ ) {
      // first row
      if ( copyGrid[i][j] === null ) {
        continue;
      } else {

        if ( i === 0 && j === 0) {
          continue;
        } else if ( i === 0 && j !== 0 ) {
          copyGrid[i][j] = copyGrid[i][j-1];
        } else if ( j === 0 && i !== 0 ) {
          copyGrid[i][j] = copyGrid[i-1][j]
        } else {
          copyGrid[i][j] = copyGrid[i-1][j] + copyGrid[i][j-1];
        }

      }
    }
  }

  // return the last spot
  var lastRow = copyGrid[copyGrid.length - 1];
  return lastRow[lastRow.length - 1];
};

console.log(pathsDP([[0,0],[1,1],[0,0]]), 0);


console.log(pathsDP([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]), 2);
