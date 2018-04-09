
describe('test ', () => {
    it('test async', async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('http://localhost:3001/')
        const button = $('#test_button');
        await browser.wait(ExpectedConditions.elementToBeClickable(button), 3000)
        await button.click();
    })
})
