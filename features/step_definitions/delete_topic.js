var { Given, When, Then } = require('cucumber')
const assert = require('assert');
const { driver } = require('../support/web_driver');
const { rootUrl } = require('../../config');


Then(/^点击删除按钮,弹出alert窗口$/, async function () {
    //await driver.sleep(300)
    await driver.findElement({ className: 'fa fa-lg fa-trash' }).click()
    //await driver.get(Url)
    let text = await driver.switchTo().alert().getText()
    console.log(text)
    return assert.ok(text, '确定要删除此话题吗？')
});

Then(/^点击确定按钮，删除话题成功$/, async function () {

    await driver.switchTo().alert().accept()

});



Then(/^点击收藏按钮$/, async function () {
    await driver.findElement({ css: 'input[value=收藏]' }).click()
});

When(/^点击用户头像进入用户中心$/, async function () {

    await driver.findElement({ css: '.user_name > a.dark' }).click();
});

Then(/^点击其中的一个话题$/, async function () {

    await driver.findElement({ css: '#content > div:nth-child(2) > div:nth-child(2) > div > a' }).click();
});

When(/^打开话题用户创建话题"([^"]*)"$/, async function (topic_title) {

    let topic = await driver.findElement({ css: '#topic_list > div:nth-child(1) > div > a' });
    assert.equal(topic_title, await topic.getText());
    await topic.click()
});

Then(/^用户收藏列表里包含收藏的话题"([^"]*)"$/, async function (topic_title) {
    let lists = await driver.findElements({ css: '.topic_title' })
    let user_collections = [];
    for (let list of lists) {
        let text = await list.getText();
        user_collections.push(text)
    }
    // console.log("user_collections", user_collections)
    return assert.ok(user_collections.indexOf(topic_title) > -1)
});

Then(/^导航到用户"([^"]*)"个人中心页面$/, async function (username) {
    
    let url = rootUrl + '/user/' + username + "/collections";
    // console.log(url)
    await driver.get(url);
});

