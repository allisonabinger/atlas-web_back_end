// StudentsController class

const readDatabase = require('../utils')

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase('./database.csv');

            let output = 'This is the list of our students\n';
            const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
            
            fields.forEach(field => {
                output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            });

            res.status(200).send(output);
        } catch (err) {
            res.status(500).send('Cannot load database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.query;

        if (!major || (major !== 'CS' && major !== 'SWE')) {
            res.status(500).send('Major parameter invalid or missing. Must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase('./database.csv');
            
            if (!students[major]) {
                res.status(200).send(`No students found in ${major}`);
                return;
            }
            
            const output = `List: ${students[major].join(', ')}`;
            res.status(200).send(output);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
