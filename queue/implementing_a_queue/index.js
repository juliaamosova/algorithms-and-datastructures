// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

    // Creating an empty array which will be our queue
    constructor() {
        this.data = [];
    }

    // Adding a record to the beginning of a queue using 'unshift' method of an array
    add(record) {
        this.data.unshift(record);
    }

    // Removing a record from the end of a queue using 'pop' method of an array
    remove() {
        return this.data.pop();
    }
}
