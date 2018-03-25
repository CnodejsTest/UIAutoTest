var { Given, When, Then } = require('cucumber')
const assert = require('assert');
const { driver } = require('../support/web_driver');
const { rootUrl } = require('../../config');

Given(/^已经进入用户注册页面$/, async function () {

    await driver.get(rootUrl + '/signup')
});

When(/^用户名字段后输入"([^"]*)"$/, async function (username) {

    await driver.findElement({ id: 'loginname' }).sendKeys(username)
});

When(/^密码字段后输入"([^"]*)"$/, async function (arg1) {

    await driver.findElement({ id: 'pass' }).sendKeys(arg1)
});

When(/^确认密码字段后输入"([^"]*)"$/, async function (arg1) {

    await driver.findElement({ id: 're_pass' }).sendKeys(arg1)
});

When(/^电子邮箱字段输入"([^"]*)"$/, async function (arg1) {

    await driver.findElement({ id: 'email' }).sendKeys(arg1)
});

Then(/^点击注册按钮$/, async function () {

    await driver.findElement({ className: 'span-primary' }).click();
});

Then(/^应该注册"([^"]*)"，校验点为"([^"]*)"$/, async function (status, exceptVal) {

    let msgText;
    switch (status) {
        case "成功":
            msgText = await driver.findElement({ css: '.alert > strong' }).getText();
            return assert.equal(msgText, exceptVal)
        case "失败":
            msgText = await driver.findElement({ css: '.alert > strong' }).getText();
            return assert.equal(msgText, exceptVal)
    }
});