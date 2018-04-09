import { expect } from 'chai'
import { element, client, elements } from '../pages/driver'
import { Google } from '../pages/google'

describe('Google base example', () => {
  let browser = null

  const baseURL = 'https://www.google.com.ua/'

  const googlePage = new Google()

  before(async () => {
    browser = client
    await browser.startDriver()
    await browser.goTo(baseURL)
  })

  after(async () => {
    await browser.closeBrowser()
    await browser.stopDriver()
  })

  it('search git hub potapovDim', async () => {
    await googlePage.getElementRects()
    await googlePage.find('git hub potapovDim')
    expect(await googlePage.getResultSearchText()).to.includes('potapovDim')
  })
})