const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');


Then(/^打开发布话题按钮$/, async function () {
    await driver.findElement({ css: '#create_topic_btn > span' }).click()
});

When(/^选择板块"([^"]*)"$/, async function (tab) {
    await driver.findElement({ xpath: '//*[@id="tab-value"]' }).click();
    await driver.sleep(3000)
    let txt;
    switch (tab) {
        case '请选择':
            return driver.findElement({ xpath: '//*[@id="tab-value"]/option[1]' }).click()

        case '分享':
            return driver.findElement({ xpath: '//*[@id="tab-value"]/option[2]' }).click()

        case '问答':
            return driver.findElement({ xpath: '//*[@id="tab-value"]/option[3]' }).click()

        case '招聘':
            return driver.findElement({ xpath: '//*[@id="tab-value"]/option[4]' }).click()
    }


});

Then(/^输入标题"([^"]*)"$/, async function (title) {
    await driver.findElement({ css: '#title' }).click();
    await driver.findElement({ css: '#title' }).sendKeys(title)
});

Then(/^输入正文"([^"]*)"$/, async function (content) {

    await driver.findElement({ css: '.CodeMirror-scroll' }).click();
    let input_area = await driver.findElement({ css: '.CodeMirror-cursor.CodeMirror-secondarycursor' })
    await driver.actions().mouseMove(input_area).sendKeys(content).perform();
});

Then(/^点击提交,"([^"]*)"校验点"([^"]*)"$/, async function (status, checkMessage) {
    await driver.findElement({ css: '.span-primary.submit_btn' }).click()
    let text;
    switch (status) {
        case "失败":
            text = await driver.findElement({ css: '.alert.alert-error > strong' }).getText();
            return assert.equal(text, checkMessage);
        case "板块为空":
            text = await driver.switchTo().alert().getText();
            await driver.switchTo().alert().accept();
            return assert.equal(text, checkMessage);
        case "成功":
            text = await driver.findElement({ css: '.topic_full_title' }).getText();
            return assert.equal(text, checkMessage)
    }
});



