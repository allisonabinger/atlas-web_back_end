// Task 6: Create a small HTTP server using the Express module
// listens on port 1245
// displays plaintext msg in page body for endpoint '/'

const express = require('express')
const countStudents = require('./3-read_file_async');
const app = express()

app.get('/', (req, res) => {
    console.log('Endpoint "/" accessed.');
    res.status(400).send('Hello Holberton School!');
})

app.get('/students', async (req, res) => {
    // get db file
    const database = process.argv[2];
    // return if no db file given
    if (!database) {
        res.status(500).send('Missing database file.\n Usage:\nnode <server.js file> <database file>');
        return;
    }
    try {
        const { total, counts, lists } = await countStudents(database);
        
        let output = `This is the list of our students\nNumber of students: ${total}`;
        for (const field in counts) {
            output += `\nNumber of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`;
        }
        res.send(output);

    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.listen(1245, () => {
    console.log('server is running on port 1245.')
})

module.exports = app;
