const test = require('ava'),
    _ = require('lodash'),
    tools = require('./index');




/**
 * params测试
 */
test('params_valid_1', t => {
    let paramsArr = ['a', 'b', 'c'];
    t.notThrows(() => {
        tools.params_valid({a:1, b:2, c:3}, paramsArr)
    })
});
test('params_valid_1', t => {
    let paramsArr = ['a', 'b', 'c'];
    t.throws(() => {
        tools.params_valid({a:1, b:2, d:3}, paramsArr)
    })
});

/**
 * mobile测试
 */
test('moible_valid_1', t => {
    let mobile = ['13501212321', '13212111111'];
    t.notThrows(() => {
        tools.moible_valid(...mobile)
    })
});
test('moible_valid_0', t => {
    let mobile = ['135012123'];
    t.throws(() => {
        tools.moible_valid(...mobile)
    })
});

/**
 * email 测试
 */
test('email_valid_1', t => {
    let email = ['shanquan54@163.com'];
    t.notThrows(() => {
        tools.email_valid(...email)
    })
});
test('email_valid_0', t => {
    let email = ['shanquan54@163com'];
    t.throws(() => {
        tools.email_valid(...email)
    })
});

/**
 * 性别测试
 */
test('gender_valid_1', t => {
    let gender = ['F', 'M'];
    t.notThrows(() => {
        tools.gender_valid(...gender)
    })
});
test('gender_valid_0', t => {
    let gender = ['women'];
    t.throws(() => {
        tools.gender_valid(...gender)
    })
});

/**
 * 数字类型测试
 */
test('number_valid_1', t => {

    let num = [1,2,3,4,5, '6'];
    t.notThrows(() => {
        tools.number_valid(...num)
    })
});
test('number_valid_0', t => {

    let num = [1,2,3,4,5, 'f'];
    t.throws(() => {
        tools.number_valid(...num)
    })
});


/**
 * 身份证测试
 */
test('idcard_valid_1', t => {

    let id = ['341224198710288211'];
    t.notThrows(() => {
        tools.idcard_valid(...id)
    })
});
test('idcard_valid_0', t => {

    let id = ['12345ww'];
    t.throws(() => {
        tools.idcard_valid(...id)
    })
});

test('randomString_test', t =>{

    let len = 6;
    let result = tools.randomString(len);
    t.true(_.isString(result));
    t.is(result.length, len, '生成长度不一致')
});