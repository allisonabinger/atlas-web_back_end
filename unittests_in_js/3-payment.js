// Task 3
// sendPaymentRequestToApi calls calculateNumber and logs total of totalAmount and totalShipping

const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    payment = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${payment}`);
    return payment;
}

module.exports = sendPaymentRequestToApi;
