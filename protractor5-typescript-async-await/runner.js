const {exec} = require('child_process')

const indexObjserver = require('mocha-allure-reporter/indexObjserver')


const run = () => new Promise(res => {
  const proc = exec('npm run test')
  indexObjserver.subscribeOnEvent('FAIL_TEST', (data) => {
    console.log(data, '||||||||||||||||||||||||||||||||||||||||||||')
  })
  proc.stderr.on('data', (err) => {
    console.log(err.toString())
  })
  proc.stdout.on('data', (err) => {
    console.log(err.toString())
  })

  proc.on('exit', () => {
    console.log('exit')
  })
})

run()