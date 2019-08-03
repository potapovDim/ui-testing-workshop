const path = require('path')
const {header, footer} = require('../selectors')

const landingMainPageAPI = {
  waitApp() {
    return this
      .waitForElementVisible('@headerRoot')
      .waitForElementPresent('@footerRoot')
  },
  asertFooterAboutText(text) {
    return this
      .waitForElementVisible('@footerAbout')
      .expect.element('@footerAbout').text.to.contain(text)
  }
}

module.exports = {
  elements: {
    ...header,

    ...footer
  },
  commands: [landingMainPageAPI]
}
