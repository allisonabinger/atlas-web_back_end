// NOTE: this main file was adjusted due to other files needing 3-read_file_async
// to return and not just log the values. 

const countStudents = require('./3-read_file_async');

countStudents('./database.csv')
    .then(({ total, counts, lists }) => {
        console.log("After!");
        console.log(`Number of students: ${total}`);
        for (const field in counts) {
            if (counts.hasOwnProperty(field)) {
                console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
            }
        }
        console.log("Done!");
    })
    .catch((error) => {
        console.error(error);
    });
// Test in terminal:
//
// node 3-main_1.js or node mains/3-main_1.js
//
// Expected Output:
//
//
// After!
// Number of students: 10
// Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
// Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
// Done!
