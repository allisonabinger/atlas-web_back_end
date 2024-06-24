const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf-8');

        const lines = data.split('\n').filter(line => line.trim() !== '');

        const counts = {};
        const lists = {};
        const total = lines.length - 1; // total number of students

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

        return { total, counts, lists };
    } catch (err) {
        throw new Error('Cannot load the database or access database file.');
    }
}

module.exports = countStudents;
