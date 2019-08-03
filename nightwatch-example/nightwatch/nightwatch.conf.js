require('babel-core/register')

module.exports = {
  src_folders: ["./tests"],
  output_folder: "./reports",
  custom_commands_path: "./src/commands",
  custom_assertions_path: "",
  page_objects_path: "./src/pages",
  globals_path: "./src/globals.js",

  test_settings: {
    default: {
      skip_testcases_on_fail: false,
      launch_url: "",
      selenium_port: 4444,
      selenium_host: "127.0.0.1",
      silent: true,
      screenshots: {
        enabled: false,
        path: ""
      },
      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true,
        acceptSslCerts: false
      }
    },
    safari: {
      desiredCapabilities: {
        browserName: "safari",
        version: "49"
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true,
        acceptSslCerts: false
      }
    }
  }
}
