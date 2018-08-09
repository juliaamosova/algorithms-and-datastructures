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
// IF (row === n) then we have hit the end of our problem
// IF the 'stair' string has a length === n then we are the end of a row
// IF the length of the 'stair' string is less than or equal to the row number we are working on
// -- Add a '#'
// ELSE
// -- Add a ' '


function steps(n, row = 0, stair = '') {

    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair);

}
