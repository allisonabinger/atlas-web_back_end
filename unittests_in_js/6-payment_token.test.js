// test suite for 6-payment_token.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should return a resolved promise with data when success === true', function(done) {
        getPaymentTokenFromAPI(true).then(response => {
            expect(response).to.deep.equal({ data: 'Successful response from the API' });
            done();
        }).catch(done);
    });
});
