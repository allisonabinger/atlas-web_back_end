// test suite for calculateNumber in 0-calcul.js using chai

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {

    // Testing for invalid 'type'
    it('should throw an error for invalid operation type', function() {
        expect(() => calculateNumber('ADD', 1, 3)).to.throw('Invalid type: must be SUM, SUBTRACT, or DIVIDE');
    });

    // Testing for SUM operations
    describe('SUM', function() {   
        it('should return 4 when inputs are 1 and 3', function() {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });

        it('should return 5 when inputs are 1 and 3.7', function() {
            expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        });

        it('should return 5 when inputs are 1.2 and 3.7', function() {
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });

        it('should return 6 when inputs are 1.5 and 3.7', function() {
            expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        });

        it('should handle negative numbers correctly', function() {
            expect(calculateNumber('SUM', -1.5, -3.7), calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
        });

        it('should handle zero correctly', function() {
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
            expect(calculateNumber('SUM', -1.2, 0)).to.equal(-1);
        });
    });
    // Testing for SUBTRACT operations
    describe('SUBTRACT', function() {
        it('should return 2 when inputs are 5 and 3', function() {
            expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
        });

        it('should return 5 when inputs are 10.2 and 4.9', function() {
            expect(calculateNumber('SUBTRACT', 10.2, 4.9)).to.equal(5);
        });

        it('should handle negative numbers correctly', function() {
            expect(calculateNumber('SUBTRACT', -3, 2)).to.equal(-5);
        });

        it('should handle zero correctly', function() {
            expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
            expect(calculateNumber('SUBTRACT', 1.2, 0)).to.equal(1);
        });
    });

    // Testing for DIVIDE operations
    describe('DIVIDE', function() {
        it('should return 2 when inputs are 6 and 3', function() {
            expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
        });

        it('should return 3. when inputs are 8.9 and 3.1', function() {
            expect(calculateNumber('DIVIDE', 8.9, 3.1)).to.equal(3);
        });

        it('should handle negative numbers correctly', function() {
            expect(calculateNumber('DIVIDE', -8.9, 3.1)).to.equal(-3);
        });

        it('should handle zero correctly', function() {
            expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0)
            expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
        });
    });
});

// To test, run:
// npm test 1-calcul.test.js
//
// expected output:
// 
// > task_0@1.0.0 test /root
// > ./node_modules/mocha/bin/mocha "0-calcul.test.js"
//
//      calculateNumber
//          ✓ ...
//        SUM
//          ✓ ...
//        SUBTRACT
//          ✓ ...
//        DIVIDE
//          ✓ ...
//
//      15 passing (10ms)
