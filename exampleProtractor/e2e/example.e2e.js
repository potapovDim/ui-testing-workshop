describe('Example',  () => {
  beforeEach(() => {
    browser.ignoreSynchronization = true //ігнорує синхронізацію з ангуляром 
    browser.get('https://www.google.com.ua/')// переходимо на гугл урл
  })
  it('should have a title Google', () => {
    expect(browser.getTitle()).toEqual('Google')// перевіряємо
  })
})

//describe - це тест-с'ют, який групує в собі тест-кейси -it
//it - це тест який виконоє певну перевірку
//beforeEach - деректива запуску певних команд перед кожним it
