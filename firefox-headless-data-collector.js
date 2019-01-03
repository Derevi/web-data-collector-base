require('geckodriver');
const firefox = require('selenium-webdriver/firefox');
const {Builder, By, Key, until} = require('selenium-webdriver');

const widthxheight = {
    width:640,
    height:480
};

let driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(
        new firefox.Options().headless().windowSize(widthxheight))
    .build();

driver.get('http://www.google.com/ncr')
    .then(() => driver.findElement(By.name('q')))
    .then(q => q.sendKeys('kuchi kopi', Key.RETURN))
    .then(() => driver.wait(until.titleIs('kuchi kopi - Google Search'), 999))
    .then(() => driver.quit());
