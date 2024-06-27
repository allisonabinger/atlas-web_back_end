// Task 6

async function getPaymentTokenFromAPI(success) {
    if (success) {
        return Promise.resolve({ data: 'Successful response from the API' });
    } else {
        return Promise.resolve(undefined);
    }
}

module.exports = getPaymentTokenFromAPI;
