describe('Example', function () {
  beforeEach(() => {
    browser.ignoreSynchronization = true //ігнорує синхронізацію з ангуляром 
    browser.get('https://www.google.com.ua/')// переходимо на гугл урл
  })
  it('should have a title Google', () => {
    expect(browser.getTitle()).toEqual('Google')// перевіряємо
  })
})
