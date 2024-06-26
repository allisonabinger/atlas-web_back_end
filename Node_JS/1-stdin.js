// Task 1: Starts a Command-Line diaglogue
// Displays messages and gathers input from user.

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// sets encoding for input stream
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
    // set name and remove w/s
    const name = input.trim();

    // use name for output and delcare program end
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdout.write('This important software is now closing\n');

    // ends input stream
    process.stdin.end();
    process.exit();
});

// Usage:
// node 1-stdin.js
//
//
// Output:
// (Prompts. input name, display prompt with name, declare closing, end)
