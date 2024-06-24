// Task 6: Create a small HTTP server using the Express module
// listens on port 1245
// displays plaintext msg in page body for endpoint '/'

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Endpoint "/" accessed.');
    res.status(400).send('Hello Holberton School!');
})

app.listen(1245, () => {
    console.log('server is running on port 1245.')
})

module.exports = app;
