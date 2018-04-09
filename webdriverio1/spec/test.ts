import { expect } from 'chai';

describe('Simple google example', function () {
  it('should get google page',  function () {
      browser.url('https://google.com')
      const title = browser.getTitle();
      expect(title).to.eql('Google');
      browser.end();
  });
});
