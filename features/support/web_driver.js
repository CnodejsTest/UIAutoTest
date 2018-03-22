require('chromedriver');
// require('geckodriver');
// require('iedriver');
const webDriver = require('selenium-webdriver');

//根据您的浏览器配置创建WebDriver实例;
function createDriver() {
    let browserConfig = process.env.BROWSER || 'chrome';
    let browser = browserConfig.toLowerCase();
    if (['chrome', 'firefox', 'ie'].indexOf(browser) < 0) browser = 'chrome'; //default to chrome
    return new webDriver.Builder().forBrowser(browser).build();
}

exports.driver = createDriver();