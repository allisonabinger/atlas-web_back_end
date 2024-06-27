const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment')
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    let spy;

    this.beforeEach(function() {
        // spy on calculateNumber
        spy = sinon.spy(Utils, 'calculateNumber')
    });

    this.afterEach(function() {
        // restore it to orig. state
        spy.restore();
    });

    it('should return 163 when inputs are 150 and 13', function() {
        expect(sendPaymentRequestToApi(150, 13)).to.equal(163);
    });

    it('should call utils.calculateNumber once', function() {
        sendPaymentRequestToApi(135, 15);
        expect(spy.calledOnce).to.be.true;
    });

    it('should call utils.calculateNumber with SUM, 135, and 15', function() {
        sendPaymentRequestToApi(135, 15);
        expect(spy.calledWith('SUM', 135, 15)).to.be.true;
    });
});
