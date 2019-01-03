require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');

const widthxheight = {
    width:640,
    height:480
};

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
        new chrome.Options().headless().windowSize(widthxheight))
    .build();

driver.get('http://www.google.com/ncr')
    .then(() => driver.findElement(By.name('q')))
    .then(q => q.sendKeys('kuchi kopi', Key.RETURN))
    .then(() => driver.wait(until.titleIs('kuchi kopi - Google Search'), 999))
    .then(() => driver.quit());
