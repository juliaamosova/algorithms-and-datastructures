// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    // Step 1. Lowercase the string
    str = str.toLowerCase() // str = "i'm a little tea pot";

    // Step 2. Split the string into an array of strings
        .split(' ') // str = ["i'm", "a", "little", "tea", "pot"];

        // Step 3. Map over the array
        .map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
            /* Map process
            1st word: "i'm"    => (word.charAt(0).toUpperCase() + word.slice(1));
                                  "i'm".charAt(0).toUpperCase() + "i'm".slice(1);
                                        "I"                     +     "'m";
                                  return "I'm";
            2nd word: "a"      => (word.charAt(0).toUpperCase() + word.slice(1));
                                  "a".charAt(0).toUpperCase()   + "".slice(1);
                                        "A"                     +     "";
                                  return "A";
            3rd word: "little" => (word.charAt(0).toUpperCase()    + word.slice(1));
                                  "little".charAt(0).toUpperCase() + "little".slice(1);
                                        "L"                        +     "ittle";
                                  return "Little";
            4th word: "tea"    => (word.charAt(0).toUpperCase() + word.slice(1));
                                  "tea".charAt(0).toUpperCase() + "tea".slice(1);
                                        "T"                     +     "ea";
                                  return "Tea";
            5th word: "pot"    => (word.charAt(0).toUpperCase() + word.slice(1));
                                  "pot".charAt(0).toUpperCase() + "pot".slice(1);
                                        "P"                     +     "ot";
                                  return "Pot";
            End of the map() method */
        });

    // Step 4. Return the output
    return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}
