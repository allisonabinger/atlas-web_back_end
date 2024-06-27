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
});

// Available payments endpoint
describe('Available Payments page', () => {
    it('should return status code 200 and correct json Object', (done) => {
        chai.request('http://localhost:7865')
            .get('/available_payments')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                });
                done();
            });
    });
});

describe('Login page', () => {
    it('should return correct welcome message when username is posted', (done) => {
        chai.request('http://localhost:7865')
            .post('/login')
            .send({ userName: 'Thomas' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome Thomas');
                done();
            });
    });

    it('should return status code 404 and correct error message when userName is missing', (done) => {
        chai.request('http://localhost:7865')
            .post('/login')
            .send({})
            .end((err, res) => {
                expect(res).to.have.status(400)
                expect(res.text).to.equal('Missing Username');
                done();
            });
    });
});
