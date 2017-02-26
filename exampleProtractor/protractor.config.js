exports.config = {
  specs: ['./e2e/**/*.e2e.js'],// всі тести в папці е2е
  seleniumAddress: 'http://localhost:4444/wd/hub',//адреса селеніум сервера
  multiCapabilities: [{ //браузери та їх сетап
    browserName:'chrome',
    shardTestFiles: true,
    maxInstances: 2
  }],
  framework: 'jasmine2', //ранер і фрейм
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  },
  useAllAngular2AppRoots: true
}
