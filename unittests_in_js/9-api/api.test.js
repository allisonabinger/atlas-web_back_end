// test suite for api.js
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Index page', () => {
    it('should return status code 200 and display the correct message', (done) => {
        chai.request('http://localhost:7865')
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });

    it('should have correct header attributes', (done) => {
        chai.request('http://localhost:7865')
            .get('/')
            .end((err, res) => {
                expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                done();
            });
    });
});

describe('Cart page', () => {
    it('should return status code 200 and correct message when :id is a number', (done) => {
        chai.request('http://localhost:7865')
            .get('/cart/23')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Payment methods for cart 23');
                done();
            });
    });

    it('should have correct header attributes when :id is a number', (done) => {
        chai.request('http://localhost:7865')
            .get('/cart/23')
            .end((err, res) => {
                expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                done();
            });
    });

    it('should return status 404 and correct message :id is not a number', (done) => {
        chai.request('http://localhost:7865')
            .get('/cart/applesauce')
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.text).to.equal('Id must be a number');
                done();
            });
    });

    it('should return correct header attributes :id is not a number', (done) => {
        chai.request('http://localhost:7865')
            .get('/cart/applesauce')
            .end((err, res) => {
                expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                done();
            });
    });
})
