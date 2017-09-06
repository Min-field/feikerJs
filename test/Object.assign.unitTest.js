const feikerAssign = require('../ES6/Object.assign.js');
const expect = require('chai').expect; 
const feikerAssignES5 = feikerAssign.feikerAssignES5; 
const feikerAssignES6 = feikerAssign.feikerAssignES6;

// ES5 test 
describe('Object#feikerAssignES5()', function(){
    it('should return a object when the length of arguments is 1', function(){
        expect(feikerAssignES5(1)).to.be.an.instanceOf(Object);
        // expect({a: 1}).to.be.an('object');
    });
    
    it('should throw an error when the length of arguments is 0 and the first arguments is null or undefined', function(){
        expect(feikerAssignES5(null)).to.be.an('error');
        expect(feikerAssignES5(undefined)).to.be.an('error');
    });

    it('should copy property from source to target', function(){
        expect(feikerAssignES5({}, {a:1}, {b:2})).to.deep.equal({a:1, b:2});
        expect(feikerAssignES5({}, {a:1})).to.deep.equal({a:1});
    });

    it('should cover property when the property name is same', function(){
        expect(feikerAssignES5({a:1}, {a:2})).to.deep.equal({a:2});
        expect(feikerAssignES5({}, {a:1}, {a:2})).to.deep.equal({a:2});
    });

    it('should skip when the source is not an object or string', function(){
        expect(feikerAssignES5({}, null)).to.deep.equal({});
        expect(feikerAssignES5({}, undefined, 'ab')).to.deep.equal({0:'a', 1:'b'});
    });

});

// ES6 test 
describe('Object#feikerAssignES6()', function(){
    it('should return a object when the length of arguments is 1', function(){
        expect(feikerAssignES6(1)).to.be.an.instanceOf(Object);
        // expect({a: 1}).to.be.an('object');
    });
    
    it('should throw an error when the length of arguments is 0 and the first arguments is null or undefined', function(){
        expect(feikerAssignES6(null)).to.be.an('error');
        expect(feikerAssignES6(undefined)).to.be.an('error');
    });

    it('should copy property from source to target', function(){
        expect(feikerAssignES6({}, {a:1}, {b:2})).to.deep.equal({a:1, b:2});
        expect(feikerAssignES6({}, {a:1})).to.deep.equal({a:1});
    });

    it('should cover property when the property name is same', function(){
        expect(feikerAssignES6({a:1}, {a:2})).to.deep.equal({a:2});
        expect(feikerAssignES6({}, {a:1}, {a:2})).to.deep.equal({a:2});
    });

    it('should skip when the source is not an object or string', function(){
        expect(feikerAssignES6({}, null)).to.deep.equal({});
        expect(feikerAssignES6({}, undefined, 'ab')).to.deep.equal({0:'a', 1:'b'});
    });

});