require('geckodriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions()
    .build();

driver.get('http://www.google.com/ncr')
    .then(() => driver.findElement(By.name('q')))
    .then(q => q.sendKeys('kuchi kopi', Key.RETURN))
    .then(() => driver.wait(until.titleIs('kuchi kopi - Google Search'), 999))
    .then(() => driver.quit());
