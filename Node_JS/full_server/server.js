const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes')

dotenv.config();

const app = express();

app.use('/', routes);

const PORT = process.env.PORT || 1245;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
