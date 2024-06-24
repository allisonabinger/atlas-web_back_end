// Task 5: creates a small HTTP server using the http module
// listens on port 1245
// when URL path is '/' , displays 'Hello Holberton School!'
// when URL path is '/students', displays 'This is the list of our students'
// and the same content as the file 3-read_file_async.js with name of database
// passed as argument of the file:

// node 5-http.js database.csv

const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');
const { count } = require('console');

const database = process.argv[2];

const app = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!'); // end response and send data
    } else if (parsedUrl.path === '/students') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        try {
            let studentData = `This is the list of our students\n`;
            const data = await countStudents(database);

            studentData += `Number of students: ${data.total}\n`;
            for (const field in data.counts) {
                studentData += `Number of students in ${field}: ${data.counts[field]}. List: ${data.lists[field].join(', ')}\n`;
            }
            res.end(studentData);
        } catch (err) {
            res.statusCode = 500;
            res.end('Cannot load database or access the database file');
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245')
});

module.exports = app;
