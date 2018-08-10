// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// Solution using Regular Expression
// g - makes sure that we don't stop at the first match we find inside the string
// i - case insensitive
// If it finds any matches, it will return an array of all matches found
// If no matches are found than match will return null

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);

    // If matches returns an array which is a truthy value, return length of an array
    // If no matches are found (null) - falsy value - return 0
    return matches ? matches.length : 0;
}
