// Starting point. Run the following while in Node_JS directory:
//
// npm run dev
//
// see below for testing

const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes')

dotenv.config();

const app = express();

app.use('/', routes);

const PORT = process.env.PORT || 1245;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

// Test 1:
// $ curl localhost:1245 && echo ""
// Hello Holberton School!


// Test 2:
// $ curl localhost:1245/students && echo ""
// This is the list of our students
// Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
// Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy


// Test 3:
// $ curl localhost:1245/students/SWE && echo ""
// List: Guillaume, Joseph, Paul, Tommy


// Test 4:
// $ curl localhost:1245/students/French -vvv && echo ""
// ...
// Major parameter must be CS or SWE
//
// $
