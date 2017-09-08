const expect = require('chai').expect; 
const is = require('../ES6/Object.is.js').is;

describe('Object#is()', function(){
    it('should return true if ele1 === ele2, else false', function(){
        expect(is('foo', 'foo')).to.be.true;
        expect(is(1, 1)).to.be.true; 
        expect(is({}, {})).to.be.false; 
    });

    it('should return false if ele1 === +0 && ele2 === -0', function(){
        expect(is(+0, -0)).to.be.false; 
    });

    it('should return true if ele1 and ele2 are both NaN', function(){
        expect(is(NaN, NaN)).to.be.true; 
    });
})