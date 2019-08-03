module.exports = {
  '@tags': ['smoke'],
  'Assert landing page footer': client => {

    const landing = client.page.landing()

    client
      .maximizeWindow()
      .url('http://localhost:8080/')

    landing
      .waitApp()
      .asertFooterAboutText('About Leno')
  }
}