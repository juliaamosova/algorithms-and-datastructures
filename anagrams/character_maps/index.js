// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    // Comparing if the number of keys in Object A is the same as in Object B
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {

        //Comparing characters of Object A to Object B
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    
    return true;
}

// Creating a helper function to build a character map for a given string to be used on both string A and stringB
function buildCharMap(str) {

    const charMap = {};

    for (let char of str.replace(/{^\w}/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}
