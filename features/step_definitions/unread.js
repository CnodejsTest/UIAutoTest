const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');


Given(/^点击右上角的未读消息标签，跳转到未读消息页面$/, async function () {

    await driver.findElement({xpath:'/html/body/div[1]/div/div/ul/li[2]/a'}).click();
});

When(/^未读界面的新消息应该和标签上数字一致$/, async function () {

    let count=await driver.findElement({css:'.messages_count'}).getText();
    let count1=await driver.findElements({css:'.cell.message'});
    // console.log(count1.length);
    return assert.equal(count,count1.length);
});
