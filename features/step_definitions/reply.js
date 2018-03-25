let { driver } = require("../support/web_driver");
let { Given, Then, When } = require("cucumber")
let assert = require('assert');

When('点击主题位置{string}', async function (linkName) {

    let link = await driver.findElement({ css: '#topic_list > div:nth-child(1) > div > a' });
    let text = await link.getText();
    await link.click();
    return assert.equal(text, linkName)

});

Then('进入回复主题页，输入内容{string}', async function (Doc) {
    await driver.executeScript(function () {
        document.querySelector("#reply_form .CodeMirror-scroll").scrollIntoView();
    })
    let posttext = await driver.findElement({ css: "#reply_form .CodeMirror-scroll" })
    await posttext.click();
    await driver.actions().mouseMove(posttext).sendKeys(Doc).perform();
});

Then(/^点击提交,添加校验点，"([^"]*)","([^"]*)","([^"]*)"，"([^"]*)"$/, async function (replaynum,floornum,content,username) {

    await driver.findElement({ css: "#reply_form .submit_btn" }).click();
    let reply_count = await driver.findElement({ css: '#content > div:nth-child(2) > div.header > span' }).getText();
    assert.ok(reply_count.includes(replaynum));
    console.log("reply_count", reply_count)

    let num = parseInt(floornum) + 1
    console.log("floornum", num)
    let item_css = 'div.panel div.reply_item:nth-child(' + num + ')'
    console.log('item_css', item_css)
    let floorText = await driver.findElement({ css: item_css + '  .reply_time' }).getText();
    assert.ok(floorText.includes(floornum));

    let makedownText = await driver.findElement({ css: item_css + ' .markdown-text' }).getText();
    assert.ok(makedownText == content)

    let author = await driver.findElement({ css: item_css + '  .dark.reply_author' }).getText();
    assert.equal(author, username)

});





