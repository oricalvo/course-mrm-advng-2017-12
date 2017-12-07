const {Builder, By, Key, until} = require('selenium-webdriver');

run();

async function run() {
    let driver = new Builder()
        .forBrowser('chrome')
        .withCapabilities({
            browserName: "chrome",
            chromeOptions: {
                args: ['disable-infobars']
            }
        })
        .build();

    await driver.get('http://www.google.com');
    driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    driver.wait(until.titleContains('webdriver'), 1000);
    await driver.quit();
}
