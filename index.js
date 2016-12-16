'use strict'
const fs = require('fs')
const glob = require("glob")
const path = require('path')

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
