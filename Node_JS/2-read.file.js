// Task 2: countStudents will attempt to read database file
// `database.csv` and log the data about students or throw error
// if database is unavail.
// Uses mains/2-main_0.js, mains/2-main_1.js, and database.csv

const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
    try {
        // read db file
        const data = fs.readFileSync(path, 'utf-8');

        // parse CSV data
        const results = []
        data.trim().split('\n').forEach(line => {
            const row = line.split(',');
            results.push ({
                firstname: row[0],
                lastname: row[1],
                age: row[2],
                field: row[3],
            });
        });
        const students = {};
        results.forEach(student => {
            if (student.field && student.firstname) {
                if (!students[student.field]) {
                    students[student.field] = {
                        count: 0,
                        list: []
                    };
                }
                students[student.field].count++;
                students[student.field].list.push(student.firstname.trim());
            }
        });
        const totalStudents = results.filter
    }
}
