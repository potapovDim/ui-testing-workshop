import { expect } from 'chai'
import { browser, by, element, $, ExpectedConditions as EC } from 'protractor'

describe('test ', () => {
  it('test async', async (done) => {
    await browser.waitForAngularEnabled(false)
    await browser.get('http://localhost:3001/')

    const button = $('#test_button')
    await browser.wait(EC.elementToBeClickable(button), 3000)
    await button.click()
    done()
  })
})
