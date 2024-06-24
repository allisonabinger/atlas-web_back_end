// AppController Class
// displays plaintext message for homepage

class AppController {
    static getHomepage(req, res) {
        res.status(200).send('Hello Holberton School!');
    }
}

module.exports = AppController;
