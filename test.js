const assert = require('assert');
const factorial = require('./factorial');
const fibonacci = require('./fibonacci');


describe("factorial using recursion ", function(){
        it("factorial is ok", function(){
            assert.equal(24, factorial(4))
        })
    })

describe("fibonacci numbers", function(){
    it("does it work", function(){
        assert.equal(143, fibonacci());

    })
})