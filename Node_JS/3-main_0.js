const countStudents = require('./3-read_file_async.js');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });

// Test in terminal:
//
// node 3-main_0.js or node mains/3-main_0.js
//
// Expected Output:
//
//
// Error: Cannot load the database or access database file 
//      at countStudents (/Users/allisonbinger/Desktop/Atlas/T4/atlas-web_back_end/Node_JS/3-read_file_async.js:33:15)
