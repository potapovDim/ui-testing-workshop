
const conf = {
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
        './specs/**/a.spec.js',
    ],
    framework: 'mocha',
    mochaOpts: {
        timeout: 10000,
        fullTrace: true,
        reporter: 'spec'
    },
    SELENIUM_PROMISE_MANAGER: false
};
exports.config = conf;
//# sourceMappingURL=/Users/dmitriypotapov/Documents/ui-testing-workshop/protractor5-typescript-async-await/built/protractor.config.js.map