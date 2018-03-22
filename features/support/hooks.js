var { After, Before, AfterAll, setDefaultTimeout } = require('cucumber');
const { driver } = require('./web_driver')


//set default step timeout
setDefaultTimeout(60 * 1000);

Before(function () {
    //Before Scenario Hook
})

After(async function () {
    //After Scenario Hook

    //capture screenshot after each scenario
    let screenshot = await driver.takeScreenshot();
    this.attach(screenshot, 'image/png');
    //clean up cookies
    await driver.manage().deleteAllCookies();
});

AfterAll(function () {
    //perform some shared teardown
    return driver.quit();
})

