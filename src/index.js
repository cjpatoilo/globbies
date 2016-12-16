'use strict'
const path = require('path')
const glob = require("glob")

function globbies (dir, cb) {
  if (!fs.existsSync(path.dirname(dir))) {
    console.log(`${dir} Not found!`)
    process.exit(1)
  }

  glob(path.resolve(__dirname, dir), (err, files) => {
    if (err) throw err
    files.map(file => cb(file))
  })
}

module.exports = globbies
