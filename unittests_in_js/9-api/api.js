// task 8
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Endpoint "/" accessed.');
    res.status(200).send('Welcome to the payment system');
})

app.get('/cart/:id', (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        res.status(404).send('Id must be a number');
    }
    res.status(200).send(`Payment methods for cart ${id}`);
})

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
})

module.exports = app;
