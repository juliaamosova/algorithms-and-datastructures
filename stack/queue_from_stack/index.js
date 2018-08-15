// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    // Creating 2 stacks: 'first' (Stack A) and 'second' (Stack B)
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    // Implementing ADD Method:
    // take a record that you want to add and push it to Stack A
    add(record) {
        this.first.push(record);
    }

    // Implementing REMOVE Method:
    // We want to make sure that we iterate over all the records in Stack A
    // We want to pop out every record in Stack A and push it to Stack B
    // Whenever we say iterate through, we really only can tell whether or
    // not there are any remaining records in Stack A through the use of the peek() method
    // We are going to call the peek() method and as long as it returns a record,
    // we will continue to iterate and push records from Stack A to Stack B
    remove() {
        while (this.first.peek()) {

            // Removing record from Stack A
            const record = this.first.pop();

            // Pushing record to Stack B
            this.second.push(record);

            // When the loop comes to conclusion, it means all records have been
            // moved over from Stack A to Stack B
        }

        // Initiating a record that we actually want to return
        const record = this.second.pop();

        // Before we return the record, we need to make sure that we restore Stack A
        // with elements that are currently in Stack B
        while (this.second.peek()) {

            // Removing record from Stack B
            const record = this.second.pop();

            // Pushing record to Stack A
            this.first.push(record);
        }

        // Returning the record
        return record;
    }

    // Implementing PEEK Method:
    // Place all records to Stack A first
    // Move all records from Stack A to Stack B
    // Once everything is moved to Stack B, we are going to peek() at Stack B
    // which will give us the 'top' element we are looking for
    // We are the going to return that 'top' element
    peek() {
        while (this.first.peek()) {

            // Removing record from Stack A
            const record = this.first.pop();

            // Pushing record to Stack B
            this.second.push(record);
        }

        // Peeking at Stack B to get the reference of the 'top' element we are looking for
        const record = this.second.peek();

        // Before we return the record, we need to make sure that we restore Stack A
        // with elements that are currently in Stack B
        while (this.second.peek()) {

            // Removing record from Stack B
            const record = this.second.pop();

            // Pushing record to Stack A
            this.first.push(record);
        }

        // Returning the 'top' element we peeked at
        return record;
    }
}
