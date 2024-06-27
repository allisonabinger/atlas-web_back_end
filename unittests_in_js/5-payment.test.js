const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;

    // task required hooks, using same hooks as previous
    beforeEach(function() {
        // spy on console.log to get output
        consoleSpy = sinon.spy(console, 'log')
    });

    afterEach(function() {
        // restore it to orig. state
        consoleSpy.restore();
    });

    it('should log the correct message to console for 135 and 15', function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.firstCall.args[0]).to.equal('The total is: 120');
    });

    it('should log the correct message to console for 10 and 10', function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.firstCall.args[0]).to.equal('The total is: 20');
    });
});
