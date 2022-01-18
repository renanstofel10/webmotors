// Imports
const { BeforeAll, AfterAll, AfterStep } = require('@cucumber/cucumber');
const wd = require('wd');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config( { path: path.resolve(__dirname, '../../.env') } );

const androidConfig = {
  app: path.resolve(__dirname, '../../app/webmotors.apk'),
  automationName: 'uiautomator2',
  deviceName: process.env.DEVICE,
  platformName: process.env.PLATFORM
};

const iOSConfig = {
  app: path.resolve(__dirname, '../../app/webmotors.ipa'),
  automationName: 'XCUITest',
  deviceName: process.env.DEVICE,
  platformName: process.env.PLATFORM
};

Object.defineProperty(global, "driver", {
  value: wd.promiseChainRemote('localhost', 4723)
});

BeforeAll({timeout: 300000}, async function() {
  if (process.env.PLATFORM === 'ios') { await driver.init(iOSConfig).setImplicitWaitTimeout(15000).setPageLoadTimeout(30000); }
  else { await driver.init(androidConfig).setImplicitWaitTimeout(15000); }
  await driver.sleep(3000); //loading initial images cars
});

AfterStep({timeout: 30000}, async function(step) {
  let world = this;
  if (step.result.status === 'FAILED') {
    return await driver.takeScreenshot().then(function (data) {
      return world.attach(data, 'image/png');
    });
  }
});

AfterAll({timeout: 30000}, async function() {
  await driver.quit();
});