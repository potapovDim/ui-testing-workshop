
const conf = {
  // directConnect: true,
  capabilities: {
    browserName: 'firefox',
    acceptSslCerts: true,
    shardTestFiles: false
  },
  specs: [
    './specs/**/*.spec.js',
  ],
  framework: 'mocha',
  mochaOpts: {
    timeout: 120000,
    fullTrace: true,
    reporter: 'spec'
  },
  SELENIUM_PROMISE_MANAGER: false
}

exports.config = conf
