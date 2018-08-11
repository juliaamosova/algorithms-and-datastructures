// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


// Solution:
// Create an empty array of arrays called 'results'
// Create a counter variable starting at 1
// As long as (start column <= end column) AND (start row <= end row)
// -- Loop from start column to end column
// ---- At results[start_row][i] assign counter variable
// ---- Increment counter
// -- Increment start row
// -- Loop from start row to end row
// ---- At results[i][end_column] assign counter variable
// ---- Increment counter
// -- Decrement end column
// -- ... repeat for other two sides

function matrix(n) {

    // Creating an empty array of arrays
   const results = [];

    // The number of sub-arrays that are going to be pushed to 'results' depends on teh value 'n'
    // We want to have 'n' number of sub-arrays inside of 'results'
    // Iterating in FOR loop from 0 to 'n' and with each steps we are going to push an empty sub-array to 'results'
   for (let i = 0; i < n; i++) {
       results.push([]);
   }

   // Key feature of arrays is the fact that we can assign values to indexes inside of an array that have not been initialized

    // 'counter' will keep track of what number we are attempting to push to 'results'
   let counter = 1;

   let startColumn = 0;
   let endColumn = n - 1;
   let startRow = 0;
   let endRow = n - 1;

   while (startColumn <= endColumn && startRow <= endRow) {

       // First FOR loop is responsible for assembling the top row
       for (let i = startColumn; i <= endColumn; i++) {
           results[startRow][i] = counter;
           counter++;
       }
       startRow++;
       
       // This FOR loop is responsible for assembling the Right Column
       for (let i = startRow; i <= endRow; i++) {
           results[i][endColumn] = counter;
           counter++;
       }
       endColumn--;

       // This FOR loop is responsible for assembling the Bottom Row
       for (let i = endColumn; i >= startColumn; i--) {
           results[endRow][i] = counter;
           counter++;
       }
       endRow--;

       // This FOR loop is responsible for assembling the Start Column
       for (let i = endRow; i >= startRow; i--) {
           results[i][startColumn] = counter;
           counter++;
       }
       startColumn++;
   }
   return results;
}
