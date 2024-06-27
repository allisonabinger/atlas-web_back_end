const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    let stub, consoleSpy;

    beforeEach(function() {
        // stub calcNum to always return 10
        stub = sinon.stub(Utils, 'calculateNumber').returns(10)
        // spy on console.log to get output
        consoleSpy = sinon.spy(console, 'log')
    });

    afterEach(function() {
        // restore it to orig. state
        consoleSpy.restore();
        stub.restore()
    });

    it('should call Utils.calculatenumber with type = SUM, a = 150, b = 13', function() {
        sendPaymentRequestToApi(150, 13)
        expect(stub.calledOnceWithExactly('SUM', 150, 13)).to.be.true;
    });

    it('should log the correct message to console', function() {
        sendPaymentRequestToApi(135, 15);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.firstCall.args[0]).to.equal('The total is: 10');
    });
});
