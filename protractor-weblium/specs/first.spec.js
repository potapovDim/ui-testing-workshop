const http = require('http')
const { browser, $, $$, ExpectedConditions } = require("protractor")

describe('Add name', () => {
  const baseURL = 'https://weblium.com/login'

  const email = $('#id5')
  const pass = $('#id9')

  http.request = ((request) => (opts, ...args) => {
    console.log(opts.pathname)
    return request(opts, ...args)
  })(http.request.bind(http.request));

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get(baseURL);
    browser.driver.manage().window().setSize(1400, 900);
  });

  it('Success login', async () => {
    {
      await browser.wait(ExpectedConditions.visibilityOf(email), 5000);
      await email.sendKeys("dereva@dereva")
      await pass.sendKeys("123123")
      const value = await pass.getAttribute('value')
      await browser.sleep(5000)
    }
  });
});