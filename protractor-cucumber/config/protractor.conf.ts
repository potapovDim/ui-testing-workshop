
import { browser, Config } from 'protractor'

const conf: Config = {
  cucumberOpts: {
    timeout: 30 * 1000,
    require: [
      './steps/**/*.steps.ts'
    ]
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    './features/**/*.feature'
  ],
  allScriptsTimeout: 30 * 1000,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: async () => {
    await browser.waitForAngularEnabled(false)
    const caps = await browser.getCapabilities()
    const browserName = caps.get('browserName')
    browser.___browserName = browserName
  }
}

exports.config = conf
