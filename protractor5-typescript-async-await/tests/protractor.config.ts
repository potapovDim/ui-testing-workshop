import { browser, Config } from 'protractor'

const conf: Config = {
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1500,1000']
        },
        shardTestFiles: false,
        maxInstances: 1
    },
    specs: [
        './specs/**/*.spec.js',
    ],
    framework: 'mocha',
    mochaOpts: {
        timeout: 10000,
        fullTrace: true,
        reporter: 'spec'
    },
    SELENIUM_PROMISE_MANAGER: false
}

exports.config = conf
