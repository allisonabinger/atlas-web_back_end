// readDatabase
// accepts file path as arg, reads the database asynchronously, returns a promise
// returns object of arrays of the firstname of students per fields

const fs = require('fs').promises

async function readDatabase(file) {
    try {
        const data = await fs.readFile(file, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '')

        const students = {};

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line !== '') {
                const [firstname, lastname, age, field] = line.split(',');

                if (!students[field]) {
                    students[field] = [];
                }
                students[field].push(firstname);
            }
        }
        return students;
    } catch (err) {
        throw new Error('Cannot load database.')
    }
}

module.exports = readDatabase;
