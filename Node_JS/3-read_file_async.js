// Task 3: same as Task two but attempts to read the database file asynchronously
// function returns a promise

const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf-8');

        const lines = data.split('\n').filter(line => line.trim() !== '');

        const counts = {};
        const lists = {};

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line !== '') {
                const [firstname, lastname, age, field] = line.split(',');
                if (counts[field] === undefined) {
                    counts[field] = 1;
                    lists[field] = [firstname];
                } else {
                    counts[field]++;
                    lists[field].push(firstname);
                }
            }
        }
        console.log(`Number of students: ${lines.length - 1}`); // Total number of students
        for (const field in counts) {
          console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database or access database file.');
    }
}

module.exports = countStudents;
