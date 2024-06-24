// Task 4: creates a small HTTP server using the http module:
// Server listens on port 1245 and displays "Hello Holberton School!"
// in the page body for any endpoint as plain text.

const http = require('http');

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!'); // end response and send data
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245')
})

module.exports = app;
