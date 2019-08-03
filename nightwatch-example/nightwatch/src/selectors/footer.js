
function getFooterSelectors() {
  const root = '.footer'
  const headerSelector = {
    footerRoot: root,
    footerAbout: `${root} .row .footer-col`,
    footerImportantLinks: `${root} .row .footer-col.middle`,
    footerSocialMedia: `${root} .row .footer-col.last`,
  }
  return headerSelector
}

module.exports = {
  footer: getFooterSelectors()
}