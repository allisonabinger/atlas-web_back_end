// task 8
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    console.log('Endpoint "/" accessed.');
    res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        res.status(404).send('Id must be a number');
    }
    res.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
    const payments = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    };

    res.json(payments)
});

app.post('/login', (req, res) => {
    const { userName } = req.body;

  if (!userName) {
    res.status(400).send('Missing Username');
  }
  res.send(`Welcome ${userName}`);
});


app.listen(7865, () => {
    console.log('API available on localhost port 7865');
})

module.exports = app;
