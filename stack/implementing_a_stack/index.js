// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {

    // Initializing an array that will hold the stack
    constructor() {
        this.data = [];
    }

    // Adding an element to the stack
    push(record) {
        this.data.push(record);
    }

    // Removing the 'top' element from the stack
    pop() {
        return this.data.pop();
    }

    // Returning the 'top' element of the stack without removing it
    peek() {
        return this.data[this.data.length - 1];
    }
}
