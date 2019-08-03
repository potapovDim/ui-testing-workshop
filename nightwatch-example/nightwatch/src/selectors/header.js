
function getHeaderSelectors() {
  const root = 'nav.navbar.navbar-expand-md.navbar-dark.navbar-custom.fixed-top'
  const headerSelector = {
    headerRoot: root,
    headerLogo: `${root} .navbar-brand.logo-image`,
    headerHome: `${root} .nav-item:nth-child(1)`,
    headerFeatures: `${root} .nav-item:nth-child(2)`,
    headerPreview: `${root} .nav-item:nth-child(3)`,
    headerContact: `${root} .nav-item:nth-child(4)`,
  }
  return headerSelector
}

module.exports = {
  header: getHeaderSelectors()
}