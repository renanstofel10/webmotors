const wd = require('wd');

class CommonPage {
  async clickElement(element) { 
    return await element.click(); 
  }

  async scroll() {
    // Get dimensions
    let dimensions = await driver.getWindowSize();

    // Set co-ordinate X according to the element you want to scroll on.
    let locationX = (dimensions.width) * 0.5

    // Set co-ordinate start Y and end Y according to the scroll driection up or down
    let locationStartY = (dimensions.height) * 0.7
    let locationEndY = (dimensions.height) * 0.17

    let action = new wd.TouchAction(driver);
    action.press({x: locationX, y: locationStartY}).wait(1000).moveTo({x: locationX, y: locationEndY}).release()
    return await action.perform();
  }

  async waitElement(element) { 
    return await element.isDisplayed();
  }
}
module.exports = CommonPage