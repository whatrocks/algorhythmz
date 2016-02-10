/*
For an NxM sheet of stamps, how many total tears does it take
to split up the sheet into all of its individual stamps?
You are not allowed to pile up strips of stamps and
tear them together, you must hold only one rectangle of stamps
at a time and tear a straight line from end to end
*/

var cuts = function(n, m) {
  return (n - 1) + (m - 1);
}

console.log(cuts(1,1), 0);
console.log(cuts(1,2), 1);
console.log(cuts(2,1), 1);
console.log(cuts(2,2), 2);
console.log(cuts(3,1), 2);
console.log(cuts(3,3), 4);
