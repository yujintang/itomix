const test = require('ava'),
    tools = require('./index');

test('moible_valid_1', t => {
    let mobile = '13501212321';
    t.notThrows(() => {
        tools.moible_valid(mobile)
    })
});
test('moible_valid_0', t => {
    let mobile = '135012123';
    t.throws(() => {
        tools.moible_valid(mobile)
    })
});