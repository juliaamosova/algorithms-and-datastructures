// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    // charContainer is an object that will contain keys (letters) and values (number of times in the string)

    var charContainer = {};
    let max = 0;
    let maxChar = '';

    // For every character we find and iterate over, we are going to add a property to charContainer

    for (let char of str) {
        if (charContainer[char]) {
            charContainer[char]++;
        } else {
            charContainer[char] = 1;
        }
    }

    // Finding the maximum character 

    for (let char in charContainer) {
        if (charContainer[char] > max) {
            max = charContainer[char];
            maxChar = char;
        }
    }

    return maxChar;
}
