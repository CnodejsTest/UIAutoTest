const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');
const { rootUrl } = require('../../config');


Given(/^浏览到网站首页$/, async function () {
    await driver.get(rootUrl);
});

When(/^点击登录按钮应该跳转到登录页面$/, async function () {

    let login_link = await driver.findElement({ css: 'a[href="/signin"]' })
    await login_link.click();
    let current_url = await driver.getCurrentUrl();
    return assert.equal(current_url, rootUrl + "/signin");
});

When(/^点击使用GitHub登录按钮跳转到GitHub授权登录页面$/, async function () {
    let github_loginBtn = await driver.findElement({ css: '.span-info' })
    await github_loginBtn.click();
    let current_url = await driver.getCurrentUrl();
    return assert.ok(current_url.includes('github.com'));
});

When(/^GitHub用户名或邮件中输入"([^"]*)"$/, async function (username) {

    let login_field = await driver.findElement({ id: 'login_field' })
    await login_field.sendKeys(username)
});

When(/^密码栏中输入"([^"]*)"$/, async function (passwd) {
    let passwd_field = await driver.findElement({ id: 'password' })
    await passwd_field.sendKeys(passwd)
});

Then(/^点击GitHub登录按钮$/, async function () {

    let login_btn = await driver.findElement({ css: 'input[type="submit"]' })
    await login_btn.click();
});

Then(/^登录状态"([^"]*)"，提示信息"([^"]*)"$/, async function (status, infomessage) {
    status = status.replace(/\s+/g, "")
    switch (status) {
        case "失败":
            let msg_text = await driver.findElement({ css: '#js-flash-container > div > div.container' }).getText();
            return assert.ok(msg_text.includes(infomessage));
        case "成功":
            // let author_btn = await driver.findElement({css:'form  button'})
            // await author_btn.click();
            let loginname_text = await driver.findElement({ css: '#sidebar > div:nth-child(1) > div.inner > div > div > span.user_name' }).getText();
            return assert.deepEqual(loginname_text, infomessage)
    }
});

Given(/^导航到用户登录页面$/, async function () {

    await driver.get(rootUrl + '/signin')
});

When(/^用户名输入"([^"]*)"$/, async function (username) {

    await driver.findElement({ id: 'name' }).sendKeys(username)
});

Then(/^密码输入"([^"]*)"$/, async function (passwd) {

    await driver.findElement({ id: 'pass' }).sendKeys(passwd)
});

Then(/^登录系统并显示用户名"([^"]*)"$/, async function (username) {

    await driver.findElement({ css: 'input[type=submit]' }).click();
    let text = await driver.findElement({ css: '.user_name > a.dark' }).getText();
    return assert.equal(text, username)
});

When(/^点击登录按钮$/, async function () {

    await driver.findElement({ css: 'input[type=submit]' }).click();
});

Then(/^应该登录"([^"]*)"，校验点为"([^"]*)"$/, async function (status, exceptval) {
    let text;
    switch (status) {
        case "成功":
            text = await driver.findElement({ css: '.user_name > a.dark' }).getText();
            return assert.equal(text, exceptval)
        case "失败":
            text = await driver.findElement({css:'div.alert.alert-error > strong'}).getText();
            return assert.equal(text,exceptval);
    }
});
