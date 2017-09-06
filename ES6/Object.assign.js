/**
 * 使用es5的语法实现es6的assign函数功能
 * Object.assign 特性： 
 *  1. assign 实现浅拷贝，传入一个target以及多个source，返回一个对象
 *  2. 将source的各个属性拷贝到target中，如果属性同名，则覆盖
 *  3. 如果只有一个参数，将该参数转为对象，返回该对象
 *  4. 如果首参数为null或者是undefiend, 报错
 *  5. 如果非首参出现null或者是undefiend，跳过
 *  6. 如果非首参出现数值，布尔值，跳过，出现字符串，将字符串序列拷贝
 *  ps: assign 拷贝的仅仅是可枚举的属性
 */

Object.defineProperty(Object, 'feikerAssign', {
    value: function(target, source1, source2, sourceN){
        if(arguments.length === 0) return {}
        var target = arguments[0],
            sources = Array.prototype.slice.call(arguments, 1);   // 返回的arguments部分是类数组还是数组
        if(sources.length === 0){
            // 这里显式首参数不能是null或者是Undefined，不写也ok
            // Object(null) 或者是 Object(undefined)会自动报错
            if(target === null || typeof target === 'undefined')  
                return new Error('can not convert null or undefined to object');
            return Object(target);
        }

        sources.forEach(function(source){
            if(typeof source === 'object'){
                Object.keys(source).forEach(function(key){
                    target[key] = source[key];
                });
            } else if (typeof source === 'string'){
                source.split('').forEach(function(char, index){
                    target[index] = char;  
                });
            }
        });

        return target; 
    },
    configurable: true,
    enumerable: true,
    writable: true
});

function feikerAssignES5(target, source1, source2, sourceN){
    if(arguments.length === 0) return {}
    var target = arguments[0],
        sources = Array.prototype.slice.call(arguments, 1);   // 返回的arguments部分是类数组还是数组
    if(sources.length === 0){
        // 这里显式首参数不能是null或者是Undefined，不写也ok
        // Object(null) 或者是 Object(undefined)会自动报错
        if(target === null || typeof target === 'undefined')  
            return new Error('can not convert null or undefined to object');
        return Object(target);
    }

    sources.forEach(function(source){
        if(typeof source === 'object' && source !== null){
            Object.keys(source).forEach(function(key){
                target[key] = source[key];
            });
        } else if (typeof source === 'string'){
            source.split('').forEach(function(char, index){
                target[index] = char;  
            });
        }
    });

    return target; 
}


function feikerAssignES6(target, ...sources){
    if(sources.length === 0)
        return Object(target);
    target = Object(target);

    sources.forEach((source) => {
        if(typeof source === 'object' && source !== null || typeof source === 'string')
            target = {
                ...target,
                ...source
            }
    });

    return target; 
}

module.exports = {
    feikerAssignES5: feikerAssignES5,
    feikerAssignES6: feikerAssignES6
}