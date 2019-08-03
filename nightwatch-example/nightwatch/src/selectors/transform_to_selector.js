function selectorObjectToSection(name, {root, ...rest}) {
  return {
    [name]: {
      selector: root,
      elemetns: {
        ...Object.keys(rest).reduce((acc, item) => {
          acc[item] = {selector: rest[item]}
          return acc
        }, {})
      }
    }
  }
}

module.exports = {
  selectorObjectToSection
}