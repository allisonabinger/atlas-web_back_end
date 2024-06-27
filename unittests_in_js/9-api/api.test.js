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

    if('should have content-type text-html and utf-8 encoding', (done) => {
        chai.request('http://localhost:7865')
            .get('/')
            .end((err, res) => {
                expect(res).to.have.header('content-type', 'text-html; charset=utf-8');
                done()
            });
    });

    

});
