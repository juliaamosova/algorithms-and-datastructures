// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Solution:
// From 0 to n (iterate through rows)
// -- Create an empty string 'stair'
// -- From 0 to n (iterate through columns)
// ---- IF the current column is equal to or less that the current row
// ------ Add a '#' to 'stair'
// ---- ELSE
// ------ Add a space to 'stair'
// -- Console log 'stair'


function steps(n) {
    for ( var row = 1; row <= n; row++) {
        var stair = '';
        for ( var column = 1; column <= n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}
