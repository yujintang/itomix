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
 * 国内手机号验证
 * @param mobile
 */
tools.moible_valid = (...mobile) => {
    let reg = /^1[34578]\d{9}$/;
    for(let n of mobile){
        if (!reg.test(n)) {
            throw new Error(`${n}📱 手机格式错误`)
        }
    }
};

/**
 * 邮箱验证
 * @param email
 */
tools.email_valid = (...email) => {
    let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    for(let n of email){
        if (!reg.test(n)) {
            throw new Error(`${n}📮 邮箱格式错误`)
        }
    }
};

/**
 * 性别验证
 * @param gender
 */
tools.gender_valid = (...gender) => {

    for(let n of gender){
        if (!['F', 'M'].includes(n)) {
            throw new Error(`${n}👦👧 性别格式错误`)
        }
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

/**
 * 身份证验证
 * @param idcard
 */
tools.idcard_valid = (...idcard) => {
    let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
    for(let n of idcard){
        if (!reg.test(n)) {
            throw new Error(`${n}🆔 身份证格式错误`)
        }
    }
};

/**
 * 生成一个随机字符串
 * @param len
 * @returns {string}
 */
tools.random_str = (len, chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678') => {

    //默认随机库去掉容易混淆的字符 oOLl,9gq,Vv,Uu,I1
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pwd;
};

module.exports = tools;