// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//Solution:
// -- Create 'results' which is the first character of the input string capitalized
// -- For each character in the string
// ---- IF the character to the left is a space
// ------ Capitalize it and add it to 'result'
// ---- ELSE
// ------ Add it to 'result'


function capitalize(str) {

    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}
