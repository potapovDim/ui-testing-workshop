import { Element, Elements } from 'awb'
import { element, elements } from './driver'

export class Google {
  submitSearch: Element
  inputSearch: Element
  resultSearch: Element

  constructor() {
    this.submitSearch = element('body').element('.tsf-p').element('[name="btnK"]').waitForClicable(1000)
    this.inputSearch = element('#lst-ib')
    this.resultSearch = element('#ires .g').waitForElementVisible(1000)
  }

  async find(value) {
    await this.inputSearch.sendKeys(value, /*Keys.ESCAPE */)
    await this.submitSearch.click()
  }

  async getElementRects() {
    const { x, y } = await this.inputSearch.location()
    const body = await this.inputSearch.locationView()
    const { width, height } = await this.inputSearch.size()
    console.log(x, y, body, width, height)
  }

  async getResultSearchText() {
    return await this.resultSearch.getText()
  }
}
