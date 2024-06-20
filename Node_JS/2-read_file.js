// Task 2: countStudents will attempt to read database file
// `database.csv` and log the data about students or throw error
// if database is unavail.
// Uses mains/2-main_0.js, mains/2-main_1.js, and database.csv

const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        const counts = {};
        const lists = {};

        // skips header line
        for (let i = 1; i < lines.length; i++){
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

        // uses line count for number of students
        console.log(`Number of students: ${lines.length - 1}`);
        for (const field in counts) {
            console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database or access database file.');
    }
}

module.exports = countStudents;
