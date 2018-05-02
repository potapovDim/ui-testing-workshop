import { browser, Config } from 'protractor'


const conf: Config = {
    // directConnect: true,
    multiCapabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1500,1000']
        },
        shardTestFiles: false,
        maxInstances: 1
    }],
    specs: [
        './tests/**/*spec.ts',
    ],
    framework: 'mocha',
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false)
        // indexObjserver.subscribeOnEvent('TEST_FAIL', (data) => {
        //     // console.log(data, '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        //     process.exit(100)
        // })
    },
    mochaOpts: {
        timeout: 10000,
        // fullTrace: true,
        reporter: 'mocha-allure-reporter'
    },
    SELENIUM_PROMISE_MANAGER: false
}

exports.config = conf
