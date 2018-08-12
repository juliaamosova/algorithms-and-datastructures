// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Recursive Solution using Memoization


function memoize(fn) {

    // Creating object that is going to store all of our calls to the fast version of our function and its respective results
    const cache = {};

    // This anonymous function is going to receive the arguments that are intended to be sent to the slowFib function
    // '...args' is a ES6 technique - we don't know how many arguments this function will be called with,
    // just take all he arguments and assign them as an array to this variable called 'args'
    return function (...args) {
        // Checking to see if the function had ever been called with a particular set of arguments before
        // If something exists in 'cache[args]', we are going to immediately return it
        if (cache[args]) {
            return cache[args];
        }

        // Result of calling our 'slowFib' function
        const result = fn.apply(this, args);

        // Taking the result from callin gour 'slowFib' function and store it inside our 'cache' object
        cache[args] = result;

        return result;
    }
}

function slowFib(n) {

    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
