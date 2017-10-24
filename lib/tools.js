"use strict";

const _ = require('lodash');

let tools = {};

/**
 * 检查元素是否在对象里面存在
 * @param obj
 * @param arr
 */
tools.params_valid = (obj, arr = []) => {
    if (!_.isObject(obj)) {
        throw new Error('params_valid function obj Must be the object')
    }

    let result = _.find(arr, v => {
        if (obj[v] === undefined || obj[v] === null || obj[v] === '') {
            return true;
        }
    });
    if (result !== undefined) {
        throw new Error(`缺少参数：${result}`)
    }
};

/**
 * 国内电话验证
 * @param phone
 */
tools.phone_valid = (phone) => {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    if (!reg.test(phone)) {
        throw new Error('☎️ 电话格式错误')
    }
};

/**
 * 国内手机号验证
 * @param mobile
 */
tools.moible_valid = (mobile) => {
    let reg = /^1[34578]\d{9}$/;
    if (!reg.test(mobile)) {
        throw new Error('📱 手机格式错误')
    }
};

/**
 * 邮箱验证
 * @param email
 */
tools.email_valid = (email) => {
    let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!reg.test(email)) {
        throw new Error('📮 邮箱格式错误')
    }
};

/**
 * 性别验证
 * @param gender
 */
tools.gender_valid = gender => {

    if (!['F', 'M'].includes(gender)) {
        throw new Error('👦👧 性别格式错误')
    }
};

/**
 * 数字类型验证
 * @param num
 */
tools.number_valid = (...num) => {

    for (let n of num) {
        if (isNaN(+n)) {
            throw new Error(`${n} 不是数字类型`)
        }
    }
};

module.exports = tools;