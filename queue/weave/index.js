// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {

    // Declaring a new queue that will store the combined result of queue #1 (sourceOne) and queue #2 (sourceTwo)
    const q = new Queue();

    // We need to iterate over 'sourceOne' and s'ourceTwo' without accessing an array inside them
    // We need to run some chunk of code as long as either 'sourceOne' and 'sourceTwo'
    // has an element that is being returned from peek()
    // If there are no elements left inside of our data array in the queue,
    // then the peek() function will likely return 'undefined' - this is a key point to keep in mind
    // As long as either 'sourceOne' or 'sourceTwo' returns a NOT 'undefined' value from their peek() methods,
    // we should continue iterating with the 'while' loop
    while (sourceOne.peek() || sourceTwo.peek()) {

        // We need to check the peek() function again of both 'sourceOne' and 'sourceTwo' and
        // make sure they still have elements inside them before we attempt take something out and
        // insert it into the 3rd queue ('q')
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        }

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }
    return q;
}
