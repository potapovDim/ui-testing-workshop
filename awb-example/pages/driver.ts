import * as awb from 'awb'
import { Conf } from 'awb'


const defautlOpts: Conf = {
  withStandalone: true,
  remote: false,
  directConnect: false,
  host: 'localhost',
  port: '4444',
  desiredCapabilities: {
    javascriptEnabled: true,
    acceptSslCerts: true,
    platform: 'ANY',
    browserName: 'chrome'
  },
  timeout: 5000
}

const { element, elements, client } = awb(defautlOpts)

export { element, elements, client }