# itomix

1. **⚠️该软件验证函数，若验证失败，则throw new Error, 请使用try{}catch(){} 或Promise 的.catch()进行捕获**
2. **验证部分都可同时验证多个参数。**

## Test syntax

```js
const ito = require('itomix');

try{

  ito.moible_valid('13501212321');

}catch(e){
  console.log('验证失败', e.message)
}
```

##Usage

```console
$ npm install itomix --save
```

## Valid content

- [params_valid](#params_valid)
- [moible_valid](#moible_valid)
- [email_valid](#email_valid)
- [gender_valid](#gender_valid)
- [number_valid](#number_valid)
- [idcard_valid](#idcard_valid)

## Tools content

- [randomString](#randomString)


***

## valid content

### params_valid
**验证是否Object里面含有这个属性**
```js
.params_valid({a:1, b:2, c:3}, ['a', 'b', 'c', 'd'])
```
### moible_valid 
**验证手机号码**
```js
.moible_valid('13501212321', '13212111111')
```
### email_valid
**验证邮箱**
```js
.email_valid('shanquan54@163.com','shanquan54@gmail.com')
```
### gender_valid
**验证性别，统一使用 F,M 代表性别**
```js
.gender_valid('F', 'M', 'F')
```
### number_valid
**验证数字**
```js
.number_valid(1,2,3, '4')
```
### idcard_valid
**验证身份证，支持15位，18位身份证验证**
```js
.idcard_valid('341224198710288211')
```

## tools content

### randomString
**生成随机长度字符串，第一个参数为字符串长度，第二可选参数为随机库，默认为：ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678**
```js
.randomString(6)
```
```js
.randomString(4, '1234567890')
```