/**
 * 实现ES6的is() 函数
 * 注意到ES6的is()函数拥有的特性
 * 1. 等同于ES的 ===， 即 Object.is('foo', 'foo') => true, Object.is({}, {}) => false
 * 2. 不同于 === 的是 Object.is(+0, -0) => false , Object.is(NaN, NaN) => true 
 */

function is(ele1, ele2){
    if(ele1 === ele2){
        // 针对ele1 ele2 为 +- 0 的情况
        // 在js中 1/0 = infinty 1/-0 = -infinty
        return ele1 !== 0 || 1 / ele1 === 1 / ele2; 
    }
    // 针对两个数都为NaN的情况
    return ele1 !== ele1 && ele2 !== ele2;
}

module.exports = {
    is: is
}