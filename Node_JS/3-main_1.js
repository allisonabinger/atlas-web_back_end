const countStudents = require('./3-read_file_async.js');

countStudents("./database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");

// Test in terminal:
//
// node 3-main_0.js or node mains/3-main_0.js
//
// Expected Output:
//
//
// After!
// Number of students: 10
// Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
// Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
// Done!
