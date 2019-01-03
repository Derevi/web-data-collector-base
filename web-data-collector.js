require('geckodriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .build();
driver.get('https://www.google.com');