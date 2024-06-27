// test suite for calculateNumber in 0-calcul.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {

    it('should return 4 when inputs are 1 and 3', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle negative numbers correctly', function() {
        assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
        assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    });

    it('should handle zero correctly', function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(1.2, 0), 1);
    });
});

// To test, run:
// npm test 0-calcul.test.js
//
// expected output:
// 
// > task_0@1.0.0 test /root
// > ./node_modules/mocha/bin/mocha "0-calcul.test.js"
//      calculateNumber
//          ✓ ...
//          ✓ ...
//          ✓ ...
//
//      6 passing (10ms)
